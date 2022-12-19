import Navbar from './navbar'
import Footer from './footer'
import React, { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    
    setInterval(() => {
      setLoading(false)
    }, 3000);

  }, [])

  return (
    <>
      <Navbar />
      
      <main>
        {children}
      </main>

      {/* <Footer /> */}
    </>
  )
}