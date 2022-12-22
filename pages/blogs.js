import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import CustomButton from '../components/customButton'
import { blogLists } from '../json/data';
import Footer from '../components/footer';
import BlogItem from '../components/blogItem';

export default function Blogs() {
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

            <div className="flex flex-col justify-center items-center relative mt-40 max-[600px]:mt-32">

                <div className="absolute -left-48">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <h1 className='font-butlerregular text-5xl text-original mb-7 max-[600px]:text-3xl'>BLOG</h1>

                <div className='grid grid-cols-3 gap-6 mb-10 max-[600px]:grid-cols-1'>

                {
                blogLists.map((blog, key) => (
                    <div key={key} className='bg-white overflow-hidden rounded-lg max-w-17rem shadow-original-shadow'>
                        <BlogItem blog={blog} />
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