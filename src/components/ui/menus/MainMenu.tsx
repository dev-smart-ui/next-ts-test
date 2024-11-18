'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import homeIcon from '@/images/icons/home.svg'
import infoIcon from '@/images/icons/info.svg'
import userIcon from '@/images/icons/user.svg'
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";

export interface iMainMenu {
  title: string,
  href: string,
  icon: StaticImageData | string
}

export const mainMenuPages: iMainMenu[] = [
  { title: "Home", href: '/', icon: homeIcon },
  { title: "About", href: '/about', icon: infoIcon },
  { title: "Authors", href: '/authors', icon: userIcon },
];

export const MainMenu = ({ 
  isMenuActive, 
  onClose
}: {
  isMenuActive: boolean, 
  onClose: () => void
}) => {
  const pathname = usePathname();

  return (
    <div className={classNames(
      'fixed top-0 left-0 w-full h-full bg-black sm:bg-transparent px-4 py-10 sm:p-0 sm:static opacity-0 pointer-events-none duration-300 sm:opacity-100 sm:pointer-events-auto',
      {'opacity-100 pointer-events-auto': isMenuActive}
    )}>
      <div className="flex items-center">
        <nav className="flex gap-5 flex-col sm:flex-row">
          { mainMenuPages ? mainMenuPages.map(({ title, href, icon }) => {
            return (
              <Link 
                key={href} 
                href={href} 
                className={`sm:ml-3 flex items-center gap-0.5 ${href == pathname ? 'font-bold pointer-events-none' : ''}`}>
                <Image src={icon} alt="" />
                {title}
              </Link>
            )
          }) : null }
        </nav>

        <button className="block sm:hidden ml-auto" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
