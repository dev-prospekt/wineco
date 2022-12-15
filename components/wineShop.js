import Image from 'next/image'

export default function WineShop() {
  return (
    <div className="homepage grid grid-cols-2 h-full">

        <div className="flex flex-col justify-center items-start relative mr-36 mt-40">
            <h1 className='font-butlerregular text-5xl text-original mb-7'>WINE SHOP</h1>

            <div className='text-lg font-avenirmedium'>
                <p className='mb-3'>
                    <strong>Wine&Co</strong> specijalizirana je veleprodaja vina, žestokih pića i popratnog asortimana.
                    Naši kupci su ponajbolji restorani, hoteli ali i sve više privatni kupci.
                </p>

                <p className='mb-3'>
                    S obzirom na naše dugogodišnje iskustvo, direktno surađujemo s većinom vinara što olakšava i ubrzava put od proizvođača do Vas.
                </p>

                <p className='mb-3'>Hvala na povjerenju i živjeli!</p>
            </div>

            <button className='border-original border bg-transparent py-2 px-8 mt-10 text-original rounded-sm
            hover:bg-original hover:text-white transition-all duration-700'>
            READ MORE
            </button>
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