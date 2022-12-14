import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react';
import Footer from '../components/footer';

function About() {
    useEffect(() => {        
        document.body.classList = '';
        document.body.classList.add("about-page");
    });
    return (
        <>
        <Head>
            <title>Wineco - About Us</title>
        </Head>

        <div className="about-page grid grid-cols-2 max-w-7xl m-auto mb-10">

            <div className="flex flex-col justify-center items-start relative mr-36 mt-40 max-[600px]:mt-28">
                <h1 className='font-butlerregular text-5xl text-original max-[600px]:text-3xl'>ABOUT US</h1>

                <div className='my-10 max-[600px]:my-5'>
                    <div className='relative mb-7 max-[600px]:mb-2'>
                        <hr className='bg-original h-0.5' />
                        <Image src={'/images/zup.svg'} alt="wine" width={50} height={50} 
                        className='zup absolute left-0 -top-5 bg-white max-[600px]:w-5 max-[600px]:-top-1' />
                    </div>

                    <p className='text-original text-base italic mx-12 font-avenirmedium max-[600px]:mx-7 max-[600px]:text-xs'>
                        Vino je među pićima najkorisnije, među lijekovima najukusnije, a od hrane najugodnije.
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

                <div className='text-lg font-avenirmedium text-textcolor'>
                    <p className='mb-3'>
                        <strong>Wine&Co</strong> specijalizirana je veleprodaja vina, žestokih pića i popratnog asortimana.
                        Naši kupci su ponajbolji restorani, hoteli ali i sve više privatni kupci.
                    </p>

                    <p className='mb-3'>
                        S obzirom na naše dugogodišnje iskustvo, direktno surađujemo s većinom vinara što olakšava i ubrzava put od proizvođača do Vas.
                    </p>

                    <p className='mb-3'>Hvala na povjerenju i živjeli!</p>

                    <p className='mb-3'>
                        <strong>Wine&Co</strong> specijalizirana je veleprodaja vina, žestokih pića i popratnog asortimana.
                        Naši kupci su ponajbolji restorani, hoteli ali i sve više privatni kupci.
                    </p>

                    <p className='mb-3'>
                        S obzirom na naše dugogodišnje iskustvo, direktno surađujemo s većinom vinara što olakšava i ubrzava put od proizvođača do Vas.
                    </p>

                    <p className='mb-3'>Hvala na povjerenju i živjeli!</p>

                    <p className='mb-3'>
                        <strong>Wine&Co</strong> specijalizirana je veleprodaja vina, žestokih pića i popratnog asortimana.
                        Naši kupci su ponajbolji restorani, hoteli ali i sve više privatni kupci.
                    </p>

                    <p className='mb-3'>
                        S obzirom na naše dugogodišnje iskustvo, direktno surađujemo s većinom vinara što olakšava i ubrzava put od proizvođača do Vas.
                    </p>

                    <p className='mb-3'>Hvala na povjerenju i živjeli!</p>
                </div>

            </div>

            <div className="relative">
                <img src='/images/about-page-bg.svg' alt="aboutus-bg" className='w-full h-screen' />

                <div className="absolute bottom-28 -right-28">
                    <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
                </div>
            </div>
        </div>

        <Footer />
        </>
    )
}

export default About;