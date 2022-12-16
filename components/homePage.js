import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="homepage grid grid-cols-2 h-full min-[450px]:px-5">
        <div className="flex items-center justify-center relative">
            <p className='font-butlerregular text-5xl leading-snug'>
                <span className='text-original'>CHEERS</span> to the <span className='text-original'>WORLD </span>
                of <span className='text-original'>PREMIUM WINES </span>
                with <span className='text-original'>WINE&CO</span>
            </p>

            <div className="absolute top-28 right-24 bomb">
                <Image src="/images/bomb.svg" alt="image" width={300} height={300} />
            </div>

            <div className="absolute bottom-4 -left-48">
                <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
            </div>

            <div className="absolute bottom-10 left-0 flex justify-between w-full">
                <Image src="/images/matosevic.svg" alt="image" width={100} height={100} />
                <Image src="/images/krapez.svg" alt="image" width={100} height={100} />
                <Image src="/images/sutor.svg" alt="image" width={100} height={100} />
                <Image src="/images/cuj.svg" alt="image" width={100} height={100} />
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