import Image from 'next/image'
import CustomButton from './customButton'
import { i18n, useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'

export default function WineList() {
    const { t } = useTranslation('common')
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetchPost()
    }, [i18n.language])

    const fetchPost = async () => {
        await fetch(`/api/winelist?lang=${i18n.language}`)
        .then(response => response.json())
        .then(json => {
            setData(json.data)
        })
    }

    return (
        <div className="winelist grid grid-cols-2 h-full">

            <div className="relative">
                <img src='/images/winelistbg.svg' alt="winelistbg" className='w-full h-screen' />

                <div className="absolute top-28 right-24 bomb">
                    <Image src="/images/bomb.svg" alt="image" width={300} height={300} />
                </div>

                <div className="absolute bottom-4 -left-48">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>
            </div>

            <div className="flex flex-col justify-center items-start relative mr-36 mt-40 max-[600px]:mt-32">
                <h1 className='font-butlerregular text-5xl text-original mb-7 max-[600px]:text-3xl uppercase'>
                    { data.attributes?.title }
                </h1>

                <div className='text-lg font-avenirmedium'>
                    <p className='mb-10 text-textcolor' dangerouslySetInnerHTML={{__html: data.attributes?.content}} />

                    {/* <div className='grid grid-cols-2 gap-5 mt-10'>
                        <CustomButton title='Aura' />
                        <CustomButton title='UVOZNI PROGRAM' />
                        <CustomButton title='Moët Hennessy' />
                        <CustomButton title='VINSKA KARTA' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}