import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher';
import { useRouter } from 'next/navigation';

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
              <div className="flex items-center justify-between z-50 relative py-10">
                <div className="group z-50 relative w-8 h-6 flex-col justify-between items-center flex cursor-pointer" onClick={openHambClick}>
                    <span className={`first-span h-1 w-full bg-original rounded-lg transform transition duration-300 ease-in-out 
                    ${open ? "rotate-45 translate-y-2.5 bg-white" : ""}`} />
                    <span className={`second-span h-1 w-full bg-original rounded-lg transition-all duration-300 ease-in-out 
                    ${open ? "w-0" : "w-full"}`} />
                    <span className={`third-span h-1 w-full bg-original rounded-lg transform transition duration-300 ease-in-out 
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


function FullScreenMenu({open, setOpen}) {
  const router = useRouter();

  const openHambClick = (event) => {
    event.preventDefault();

    setOpen(!open)

    if(document.body.classList.value != ''){
      router.push("/");
    }
  };
  
  return (
      <div className={`fullscreenmenu absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-y-0" : "-translate-y-full"} 
      transition-transform duration-500 ease-in-out filter`}>
         
          <div className="flex flex-col justify-center items-center mt-48 max-[400px]:mt-36">
            <Link href='' id="navLink" data-key="0" onClick={openHambClick}
            className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white max-[400px]:my-2">
              HOMEPAGE
            </Link>
            <Link href='' id="navLink" data-key="1" onClick={openHambClick}
            className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white max-[400px]:my-2">
              ABOUT US
            </Link>
            <Link href='' id="navLink" data-key="2" onClick={openHambClick}
            className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white max-[400px]:my-2">
              WINE LIST
            </Link>
            <Link href='' id="navLink" data-key="3" onClick={openHambClick}
            className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white max-[400px]:my-2">
              WINE SHOP
            </Link>
            <Link href='' id="navLink" data-key="4" onClick={openHambClick}
            className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white max-[400px]:my-2">
              OUR BRANDS
            </Link>
            <Link href='' id="navLink" data-key="5" onClick={openHambClick}
            className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white max-[400px]:my-2">
              BLOG
            </Link>
            <Link href='' id="navLink" data-key="6" onClick={openHambClick}
            className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white max-[400px]:my-2">
              CONTACT US
            </Link>
          </div>  
      </div>
  )
}