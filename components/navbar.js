import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher';
import { useRouter } from 'next/router';
import { i18n, useTranslation } from 'next-i18next'
import FullScreenMenu from './FullScreenMenu';

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const openHambClick = (event) => {
    event.preventDefault();

    setOpen(!open)
  };
  
  return (
    <div className='header'>
      <FullScreenMenu open={open} setOpen={setOpen} />

      <div>
          <div className="header z-50 fixed right-0 left-0 max-w-7xl m-auto max-[1250px]:px-5">
              <div className="flex items-center justify-between z-50 relative py-10 max-[600px]:py-5">
                <div className="group z-50 relative w-8 h-6 flex-col justify-between items-center flex cursor-pointer" onClick={openHambClick}>
                    <span className={`first-span h-0.5 w-full bg-original rounded-lg transform transition-all duration-300 ease-in-out 
                    ${open ? "rotate-45 translate-y-2.5 bg-white" : ""}`} />
                    <span className={`second-span h-0.5 w-full bg-original rounded-lg transform transition-all duration-300 ease-in-out 
                    ${open ? "w-0" : "w-full"}`} />
                    <span className={`third-span h-0.5 w-full bg-original rounded-lg transform transition-all duration-300 ease-in-out 
                    ${open ? "-rotate-45 -translate-y-2.5 bg-white" : ""}`} />
                </div>

                <div className="logo">
                  <a href="/">
                    <Image src={`${open ? "/images/logo_white.svg" : "/images/logo.svg"}`} alt="image" width={120} height={120} />
                  </a>
                </div>

                <div className="search">
                  <LanguageSwitcher open={open} />
                </div>
              </div>
          </div>
      </div>

    </div>
  )
}