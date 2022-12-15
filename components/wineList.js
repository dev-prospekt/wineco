import Image from 'next/image'

export default function WineList() {
  return (
    <div className="homepage grid grid-cols-2 h-full">

        <div className="relative">
            <img src='/images/winelistbg.svg' alt="winelistbg" className='w-full h-screen' />

            <div className="absolute top-28 right-24 bomb">
                <Image src="/images/bomb.svg" alt="image" width={300} height={300} />
            </div>

            <div className="absolute bottom-4 -left-48">
                <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
            </div>
        </div>

        <div className="flex flex-col justify-center items-start relative mr-36 mt-40">
            <h1 className='font-butlerregular text-5xl text-original mb-7'>WINE LIST</h1>

            <div className='text-lg font-avenirmedium'>
                <p className='mb-3'>
                    In our wine list you can find wines from.... 
                    Aliquam lorem elementum vel eget pellentesque turpis augue aenean ipsum. 
                    Sit porttitor nascetur cursus eu. A morbi adipiscing tortor est diam viverra posuere.
                </p>

                <p className='mb-3'>
                    Ac convallis proin ac, augue nunc, duis etiam non pellentesque. 
                    Cras consectetur nec dictum ipsum mollis molestie turpis adipiscing. 
                    Purus facilisis viverra eget sed pretium congue consequat. 
                    Vel consectetur vel luctus senectus varius amet vel. 
                </p>

                <p className='mb-3'>
                    By clicking the button you can download wine lists:
                </p>

                <div className='grid grid-cols-2 gap-5'>
                    <button className='border-original border bg-transparent py-2 px-8 text-original rounded-sm
                    hover:bg-original hover:text-white transition-all duration-700'>
                    Aura
                    </button>
                    <button className='border-original border bg-transparent py-2 px-8 text-original rounded-sm
                    hover:bg-original hover:text-white transition-all duration-700'>
                    UVOZNI PROGRAM
                    </button>
                    <button className='border-original border bg-transparent py-2 px-8 text-original rounded-sm
                    hover:bg-original hover:text-white transition-all duration-700'>
                    Moët Hennessy
                    </button>
                    <button className='border-original border bg-transparent py-2 px-8 text-original rounded-sm
                    hover:bg-original hover:text-white transition-all duration-700'>
                    VINSKA KARTA
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}