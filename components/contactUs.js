import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function ContactUs() {
    const { t } = useTranslation('contact')

    return (
        <div className="contactus grid grid-cols-2 h-full">

            <div className="flex flex-col justify-center items-start relative mr-36 mt-40 max-[600px]:mt-32">
                <h1 className='font-butlerregular text-5xl text-original mb-10 max-[600px]:text-3xl'>{t("title")}</h1>

                <div className='text-lg font-avenirmedium'>
                    <div className='mb-10'>
                        <p className='text-original font-butlerregular text-3xl font-extrabold mb-3 max-[600px]:text-xl'>Wine&Co d.o.o.</p>
                        <p className='text-textcolor'>Milutina Barača 5,</p>
                        <p className='text-textcolor'>51000 Rijeka, Croatia</p>
                    </div>

                    <div className='mb-10'>
                        <p className='text-original font-butlerregular text-3xl font-extrabold mb-3 max-[600px]:text-xl'>{t("Contact")}</p>
                        <p className='text-textcolor'>{t("Phone")}: <span className='text-original'><a href="tel:+3850993119497">+385 (0) 99 311 9497</a></span></p>
                        <p className='text-textcolor'>Email: <span className='text-original'><a href="mailto:info@wine-co.hr">info@wine-co.hr</a></span></p>
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