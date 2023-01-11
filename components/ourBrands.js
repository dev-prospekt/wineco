import Image from 'next/image'
import Script from 'next/script'
import { i18n, useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'

export default function OurBrands() {
    const { t } = useTranslation('common')
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetchPost()
    }, [i18n.language])

    const fetchPost = async () => {
        await fetch(`http://strapi.wine-co.hr/api/our-brand?locale=${i18n.language}`)
        .then(response => response.json())
        .then(json => {
            setData(json.data)
        })
    }

    return (
        <>
        <Script src='/js/script.js'></Script>

        <div className="ourbrands grid h-full">

            <div className="flex flex-col justify-start items-center relative mt-40 max-[600px]:justify-start">
                <div className="absolute bottom-4 -left-48 max-[600px]:-z-1">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <div className="absolute bottom-28 -right-28 max-[600px]:-z-1">
                    <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
                </div>

                <h1 className='font-butlerregular text-5xl text-original mb-7 max-[600px]:text-3xl uppercase'>
                    { data?.attributes?.title }
                </h1>

                <div className='text-lg font-avenirmedium text-center'>
                    <p className='mb-3 text-textcolor' dangerouslySetInnerHTML={{__html: data?.attributes?.content}} />
                </div>

                <div className='relative w-1/4'>
                    <img src="/country/croatian.svg" useMap="#image-map" id="mapa" alt='map' />
                    <map name="image-map">
                        <area target="" className='cursor-pointer' alt="France" title="france" coords="-1,55,104,1,194,42,194,175,66,195" shape="poly" />
                        <area target="" className='cursor-pointer' alt="Italy" title="italy" coords="194,117,194,161,231,149,308,323,376,237,275,131,297,101,244,91" shape="poly" />
                        <area target="" className='cursor-pointer' alt="Slovenia" title="slovenia" coords="292,111,310,101,340,99,318,121,294,123" shape="poly" />
                        <area target="" className='cursor-pointer' alt="Croatian" title="croatian" coords="338,106,374,119,384,133,351,132,350,188,292,128,320,125" shape="poly" />
                        <area target="" className='cursor-pointer' alt="Serbia" title="serbia" coords="385,116,404,104,436,148,440,187,413,204,394,164" shape="poly" />
                    </map>
                </div>

                {/* CROATIA */}
                <div id="checkImage" data-title="croatian" className="flex justify-center gap-24 w-full max-[600px]:flex-wrap max-[600px]:gap-4">
                    <Image src="/country/bastian.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/cuj.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/tomaz.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/matosevic.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/manegheti.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/skaramuca.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                </div>

                {/* SERBIA */}
                <div id="checkImage" data-title="serbia" className="hidden justify-center gap-24 w-full max-[600px]:flex-wrap max-[600px]:gap-4">
                    <Image src="/country/tonkovic.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/vertiz.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                </div>

                {/* ITALY */}
                <div id="checkImage" data-title="italy" className="hidden justify-center gap-24 w-full max-[600px]:flex-wrap max-[600px]:gap-4">
                    <Image src="/country/belavista.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/bosco.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/collavini.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/images/marcveti.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/images/franz.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                </div>

                {/* FRANCE */}
                <div id="checkImage" data-title="france" className="hidden justify-center gap-24 w-full max-[600px]:flex-wrap max-[600px]:gap-4">
                    <Image src="/country/laurent.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                </div>

                {/* SLOVENIA */}
                <div id="checkImage" data-title="slovenia" className="hidden justify-center gap-24 w-full max-[600px]:flex-wrap max-[600px]:gap-4">
                    <Image src="/country/dolfo.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/guerila.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/krapez.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/sutor.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/svetlik.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                    <Image src="/country/scurek.svg" alt="image" width={70} height={70} className='cursor-pointer' />
                </div>

            </div>
        </div>
        </>
    )
}