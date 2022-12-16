import Image from 'next/image'
import Script from 'next/script'

export default function OurBrands() {
  return (
    <>
    <Script src='/js/script.js'></Script>

    <div className="homepage grid h-full">

        <div className="flex flex-col justify-center items-center relative mt-40">
            <div className="absolute bottom-4 -left-48">
                <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
            </div>

            <div className="absolute bottom-28 -right-28">
                <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
            </div>

            <h1 className='font-butlerregular text-5xl text-original mb-7'>OUR BRANDS</h1>

            <div className='text-lg font-avenirmedium text-center'>
                <p className='mb-3'>
                    By clicking on the map, you can see our brands from each country.
                </p>
            </div>

            <div className='relative'>
                <img src="/country/france.svg" useMap="#image-map" id="mapa" alt='map' />
                <map name="image-map">
                    <area target="" className='cursor-pointer' alt="France" title="france" coords="-1,55,104,1,194,42,194,175,66,195" shape="poly" />
                    <area target="" className='cursor-pointer' alt="Italy" title="italy" coords="194,117,194,161,231,149,308,323,376,237,275,131,297,101,244,91" shape="poly" />
                    <area target="" className='cursor-pointer' alt="Slovenia" title="slovenia" coords="292,111,310,101,340,99,318,121,294,123" shape="poly" />
                    <area target="" className='cursor-pointer' alt="Croatian" title="croatian" coords="338,106,374,119,384,133,351,132,350,188,292,128,320,125" shape="poly" />
                    <area target="" className='cursor-pointer' alt="Serbia" title="serbia" coords="385,116,404,104,436,148,440,187,413,204,394,164" shape="poly" />
                </map>
            </div>

            <div className="flex justify-center gap-24 w-full">
                <Image src="/country/matosevic.svg" alt="image" id="checkImage" data-title="slovenia" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/krapez.svg" alt="image" id="checkImage" data-title="france" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/sutor.svg" alt="image" id="checkImage" data-title="croatian" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/cuj.svg" alt="image" id="checkImage" data-title="italy" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/tonkovic.svg" alt="image" id="checkImage" data-title="serbia" width={70} height={70} className='cursor-pointer' />
            </div>

            <div className="flex justify-center gap-24 w-full mt-10 mb-10">
                <Image src="/country/matosevic.svg" alt="image" id="checkImage" data-title="france" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/krapez.svg" alt="image" id="checkImage" data-title="croatian" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/sutor.svg" alt="image" id="checkImage" data-title="italy" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/cuj.svg" alt="image" id="checkImage" data-title="serbia" width={70} height={70} className='cursor-pointer' />
                <Image src="/country/tonkovic.svg" alt="image" id="checkImage" data-title="slovenia" width={70} height={70} className='cursor-pointer' />
            </div>

        </div>
    </div>
    </>
  )
}