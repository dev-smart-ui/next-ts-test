'use client'

import Link from "next/link"
import { MainMenu } from "../ui/menus/MainMenu"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"


export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      isMenuActive && setIsMenuActive(false) // close menu on change route
    }
  }, [pathname, isMenuActive]);

  return (
    <header className="header py-2 bg-color-primary text-white sticky top-0 z-10">
      <div className="sm:max-w-xl lg:max-w-3xl w-full mx-auto px-4 sm:px-0">
        <div className="flex items-center">
          <div className="logo">
            <Link href="/" className="text-2xl font-bold uppercase">My APP</Link>
          </div>
          <div className="menu ml-auto">
            <button className="block sm:hidden" onClick={() => setIsMenuActive(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <MainMenu 
              isMenuActive={isMenuActive} 
              onClose={() => setIsMenuActive(false)} 
            />
          </div>
        </div>
      </div>
    </header>
  )
}
