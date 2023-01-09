import Image from 'next/image'
import { i18n, useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'

export default function AboutUs({data}) {
    const { t, i18n } = useTranslation('common')
    const [aboutUsData, setAboutUsData] = useState([])
    
    useEffect(() => {
        fetchPost()
    }, [i18n.language])

    const fetchPost = async () => {
        await fetch(`http://localhost:1337/api/about-us?locale=${i18n.language}`)
        .then(response => response.json())
        .then(json => {
            setAboutUsData(json.data)
        })
    }

    return (
        <div className="aboutus grid grid-cols-2 h-full">

            <div className="flex flex-col justify-center items-start relative mr-36 mt-40 max-[600px]:mt-36">
                <h1 className='font-butlerregular text-5xl text-original max-[600px]:text-3xl uppercase'>
                { aboutUsData.attributes.title }
                </h1>

                <div className='my-10 max-[600px]:my-5'>
                    <div className='relative mb-7 max-[600px]:mb-2'>
                        <hr className='bg-original h-0.5' />
                        <Image src={'/images/zup.svg'} alt="wine" width={50} height={50} 
                        className='zup absolute left-0 -top-5 bg-white max-[600px]:w-5 max-[600px]:-top-1' />
                    </div>

                    <p className='text-original text-base italic mx-12 font-avenirmedium max-[600px]:mx-7 max-[600px]:text-xs'>
                        {t("aboutusinfo")}
                    </p>
                    <p className='text-original text-base italic mx-12 mt-5 font-avenirmedium max-[600px]:mx-7 max-[600px]:text-xs'>
                        Plutarch von Charona
                    </p>
                    
                    <div className='relative mt-7 max-[600px]:mt-2'>
                        <hr className='bg-original h-0.5' />
                        <Image src={'/images/zdown.svg'} alt="wine" width={50} height={50} 
                        className='zdown absolute right-0 -top-2.5 bg-white max-[600px]:w-5 max-[600px]:-top-1' />
                    </div>
                </div>

                <div className='text-lg font-avenirmedium mb-10 text-textcolor'>
                    <p className='mb-10 max-[600px]:mb-2'>
                        <strong>Wine&Co</strong> {t("aboutus1")}
                    </p>

                    <p className='mb-10 max-[600px]:mb-2'>
                        {t("aboutus2")}
                    </p>

                    <p className='mb-10 font-bold max-[600px]:mb-2'>{t("aboutus3")}</p>
                </div>

                {/* <CustomButton title={t("READ MORE")} link='/about' /> */}
            </div>

            <div className="relative">
                <img src='/images/aboutus-bg.svg' alt="aboutus-bg" className='w-full h-screen' />

                <div className="absolute bottom-28 -right-28">
                    <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
                </div>
            </div>
        </div>
    )
}