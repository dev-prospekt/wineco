import Navbar from './navbar'
import Footer from './footer'
import Image from 'next/image'
import React, { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      <div>
      {isLoading ? (
        <div id="globalLoader">
          <Image className='logo-loader' src="/images/logo_white.svg" width={150} height={150} alt="logo" />
        </div>
      ) : ('')}
      </div>

      <Navbar />
        
      <main>
        {children}
      </main>

      {/* <Footer /> */}
    </>
  )
}