import Image from 'next/image'

export default function ContactUs() {
  return (
    <div className="homepage grid grid-cols-2 h-full">

        <div className="flex flex-col justify-center items-start relative mr-36 mt-40">
            <h1 className='font-butlerregular text-5xl text-original'>CONTACT US</h1>

            <div className='text-lg font-avenirmedium'>
                <div className='mb-3'>
                    <p>Wine&Co d.o.o.</p>
                    <p>Milutina Barača 5,</p>
                    <p>51000 Rijeka, Croatia</p>
                </div>

                <div className='mb-3'>
                    <p>Contact</p>
                    <p>Phone: +385 (0) 99 311 9497</p>
                    <p>Email: info@wine-co.hr</p>
                </div>

                <div className='mb-3'>
                    <p>Follow Us</p>

                    <div className='flex gap-4'>
                        <Image src="/images/face-icon.svg" width={50} height={50} alt='facebook' />
                        <Image src="/images/insta-icon.svg" width={50} height={50} alt='instagram' />
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

        {/* <div className="absolute bottom-0">
            <Image src="/images/grozd.svg" alt="image" width={800} height={450} />
        </div> */}
    </div>
  )
}