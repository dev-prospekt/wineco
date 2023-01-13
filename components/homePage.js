import Image from 'next/image'
import { useState, useEffect } from 'react'
import { i18n, useTranslation } from 'next-i18next'

const HomePage = () => {
    const [homePageData, setHomePageData] = useState([])

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        fetch(`https://www.wine-co.hr/api/home?lang=${i18n.language}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setHomePageData(data.data.attributes)
        });
    }

    return (
        <div className="homepage grid grid-cols-2 h-full max-[1250px]:px-5">
            <div className="flex items-center justify-center relative">

                <p className='font-butlerregular text-5xl leading-snug max-[450px]:text-3xl' 
                dangerouslySetInnerHTML={{__html: homePageData.content}} />

                <div className="absolute top-28 right-24 bomb -z-1">
                    <Image src="/images/bomb.svg" alt="image" width={300} height={300} />
                </div>

                <div className="absolute bottom-4 -left-48 -z-1">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <div className="absolute bottom-10 left-0 flex justify-between w-full">
                    {homePageData.logotip ? homePageData.logotip.data.map((logotip) => {
                        return(
                            <img key={logotip.id} src={`http://strapi.wine-co.hr${logotip.attributes.url}`} 
                            alt={logotip.attributes.name} width={100} height={100} />
                        );
                    }) : '' }
                </div>
            </div>

            <div className="flex items-end">

                <img src='/images/case1.svg' alt="case" className='w-full h-4/5 object-cover' />

                <div className="absolute bottom-28 -right-28">
                    <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;