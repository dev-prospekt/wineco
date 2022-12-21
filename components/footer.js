import Image from "next/image";

export default function Footer() {
    return (
      <div className="max-w-7xl m-auto mt-40">
        
        <hr className='bg-original h-px' />

        <div className='py-16 grid grid-cols-3 px-5'>
          <div className='logo-footer'>
            <Image src='/images/logo.svg' width={150} height={150} alt='logo' />
          </div>

          <div>
            <p className='font-butlerregular text-2xl text-original mb-3'>QUICK LINKS</p>

            <ul className='font-avenirmedium text-siva font-normal'>
              <li className='mb-1'>Homepage</li>
              <li className='mb-1'>About Us</li>
              <li className='mb-1'>Our Brands/Clients</li>
              <li className='mb-1'>Contact Us</li>
            </ul>
          </div>

          <div>
            <p className='font-butlerregular text-2xl text-original mb-3'>CONTACT US</p>

            <ul className='font-avenirmedium text-siva'>
              <li className='mb-1'>Adress: Milutina Barača 5, 51000 Rijeka</li>
              <li className='mb-1'>Phone: <a className='text-original' href="tel:+385 (0) 99 311 9497">+385 (0) 99 311 9497</a></li>
              <li className='mb-1'>Email: <a className='text-original' href="mailto:info@wine-co.hr">info@wine-co.hr</a></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
  