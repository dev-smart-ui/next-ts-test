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
  isMenuActive
}: {
  isMenuActive: boolean
}) => {
  const pathname = usePathname();

  return (
    <div className={classNames(
      'fixed top-[48px] left-0 w-full h-full bg-color-primary sm:bg-transparent px-4 py-10 sm:p-0 sm:static opacity-0 pointer-events-none duration-300 sm:opacity-100 sm:pointer-events-auto border-t border-color-border sm:border-none',
      {'opacity-100 pointer-events-auto': isMenuActive}
    )}>
      <div className="flex items-center">
        <nav className="flex gap-2 flex-col sm:flex-row w-full">
          { mainMenuPages ? mainMenuPages.map(({ title, href, icon }) => {
            return (
              <Link 
                key={href} 
                href={href} 
                className={classNames(
                  'flex items-center justify-center gap-0.5 px-3 py-3 sm:py-1.5 rounded-lg w-full',
                  {'font-bold pointer-events-none bg-black': href == pathname}
                )}
              >
                <Image src={icon} alt="" />
                {title}
              </Link>
            )
          }) : null }
        </nav>
      </div>
    </div>
  )
}
