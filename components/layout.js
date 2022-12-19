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
      <div>
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
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