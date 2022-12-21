import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import CustomButton from '../components/customButton'
import { blogLists } from '../json/data';
import Footer from '../components/footer';

export default function Blogs() {

    const size = useWindowSize();

    useEffect(() => {        
        document.body.classList = '';
        document.body.classList.add("blogs-page");
    });

    return (
        <>
        <Head>
            <title>Wineco - Blogs</title>
        </Head>

        <div className="blog grid h-full max-w-7xl m-auto">

            <div className="flex flex-col justify-center items-center relative mt-40">

                <div className="absolute -left-48">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <h1 className='font-butlerregular text-5xl text-original mb-7'>BLOG</h1>

                <div className='grid grid-cols-3 gap-6 mb-10'>

                {
                blogLists.map((blog, key) => (
                    <div key={key} className='bg-white overflow-hidden rounded-lg max-w-17rem shadow-original-shadow'>
                        <Link href={`/blog/${blog.id}`}>
                            <Image src={blog.image} width={360} height={270} alt='blog' className='h-32 object-cover' />

                            <div className='p-5'>
                                <p className='font-extrabold text-lg text-original font-butlerregular tracking-widest mb-4'>
                                    { blog.name }
                                </p>

                                <p className='text-textcolor text-base font-light mb-4'>
                                    { blog.desc.substring(0, 100) + "..." }
                                </p>

                                <span className='text-original text-base font-bold flex items-center'>
                                    <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                                    { blog.date }
                                </span>
                            </div>
                        </Link>
                    </div>
                )).reverse()
                }

                </div>

            </div>
        </div>

        <Footer />
        </>
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