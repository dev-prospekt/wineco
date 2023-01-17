import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './customButton'
import { i18n, useTranslation } from 'next-i18next'
import React, { useState, useRef, useEffect } from "react";
import BlogItem from './blogItem';

export default function Blog() {
    const { t } = useTranslation('common')
    const size = useWindowSize();

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetchPost()
    }, [i18n.language])

    const fetchPost = async () => {
        await fetch(`/api/blog?lang=${i18n.language}`)
        .then(response => response.json())
        .then(json => {
            setData(json.data)
        })
    }

    return (
        <div className="blog grid h-full">

            <div className="flex flex-col justify-center items-center relative mt-0 max-[600px]:mt-32 max-[400px]:mt-16">
                <div className="absolute bottom-4 -left-48 -z-1">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <h1 className='font-butlerregular text-5xl text-original mb-7 max-[600px]:text-3xl'>BLOG</h1>

                <div className='flex gap-6 mb-10 max-[600px]:flex-wrap max-[600px]:justify-center'>

                    { 
                    size.width < 600 ?
                    data.slice(-1).map((blog, key) => (
                        <div key={key} className='bg-white overflow-hidden rounded-lg max-w-17rem shadow-original-shadow'>
                            <BlogItem blog={blog} />
                        </div>
                    )).reverse() : data.slice(-3).map((blog, key) => (
                        <div key={key} className='bg-white overflow-hidden rounded-lg max-w-17rem shadow-original-shadow'>
                            <BlogItem blog={blog} />
                        </div>
                    )).reverse()
                    }

                </div>
                
                <CustomButton title={t("VIEW ALL")} link='/blogs' />

            </div>
        </div>
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}