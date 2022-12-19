import Image from 'next/image'
import CustomButton from './customButton'

export default function WineShop() {
  return (
    <div className="wineshop grid grid-cols-2 h-full">

        <div className="flex flex-col justify-center items-start relative mr-36 mt-40">
            <h1 className='font-butlerregular text-5xl text-original mb-7'>WINE SHOP</h1>

            <div className='text-lg font-avenirmedium mb-10'>
                <p className='mb-10'>
                    <strong>Wine&Co</strong> specijalizirana je veleprodaja vina, žestokih pića i popratnog asortimana.
                    Naši kupci su ponajbolji restorani, hoteli ali i sve više privatni kupci.
                </p>

                <p className='mb-10'>
                    S obzirom na naše dugogodišnje iskustvo, direktno surađujemo s većinom vinara što olakšava i ubrzava put od proizvođača do Vas.
                </p>

                <p className='mb-10'>Hvala na povjerenju i živjeli!</p>
            </div>

            <CustomButton title='READ MORE' />
        </div>

        <div className="relative">
            <img src='/images/wineshopbg.svg' alt="wineshopbg" className='w-full h-screen' />

            <div className="absolute bottom-28 -right-28">
                <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
            </div>
        </div>
    </div>
  )
}