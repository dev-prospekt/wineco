import Image from 'next/image'
import Link from 'next/link'
import { i18n, useTranslation } from 'next-i18next'
import React, { useState, useEffect } from "react";

export default function ContactUs() {
    const { t } = useTranslation('contact')

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetchPost()
    }, [i18n.language])

    const fetchPost = async () => {
        await fetch(`https://www.wine-co.hr/api/contactus?lang=${i18n.language}`)
        .then(response => response.json())
        .then(json => {
            setData(json.data)
        })
    }

    return (
        <div className="contactus grid grid-cols-2 h-full">

            <div className="flex flex-col justify-center items-start relative mr-36 mt-40 max-[600px]:mt-32">
                <h1 className='font-butlerregular text-5xl text-original mb-10 max-[600px]:text-3xl uppercase'>
                    { data.attributes?.title }
                </h1>

                <div className='text-lg font-avenirmedium'>
                    <div className='mb-10'>
                        <p className='text-original font-butlerregular text-3xl font-extrabold mb-3 max-[600px]:text-xl'>
                        { data.attributes?.subtitle1 }
                        </p>
                        <p className='text-textcolor' dangerouslySetInnerHTML={{__html: data.attributes?.address }} />
                    </div>

                    <div className='mb-10'>
                        <p className='text-original font-butlerregular text-3xl font-extrabold mb-3 max-[600px]:text-xl'>
                        { data.attributes?.subtitle2 }
                        </p>
                        <p className='text-textcolor' dangerouslySetInnerHTML={{__html: data.attributes?.info }} />
                    </div>

                    <div className=''>
                        <p className='text-original font-butlerregular text-3xl font-extrabold mb-3 max-[600px]:text-xl'>
                        {t("Follow Us")}
                        </p>

                        <div className='flex gap-4'>
                            <Link href="https://www.facebook.com/" target={'_blank'}>
                                <Image src="/images/face-icon.svg" width={50} height={50} alt='facebook' 
                                className='max-[600px]:w-9 ease-in-out duration-300 transition-all hover:scale-110' />
                            </Link>

                            <Link href="https://www.instagram.com" target={'_blank'}>
                                <Image src="/images/insta-icon.svg" width={50} height={50} alt='instagram' 
                                className='max-[600px]:w-9 ease-in-out duration-300 transition-all hover:scale-110' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img src='/images/contactus-bg.svg' alt="aboutus-bg" className='w-full h-screen' />

                <div className="absolute bottom-28 -right-28">
                    <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
                </div>
            </div>

            <div className="absolute bottom-0 left-32">
                <Image src="/images/grozd.svg" alt="image" width={900} height={900} />
            </div>
        </div>
    )
}