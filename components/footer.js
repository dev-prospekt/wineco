import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  const openPageFromFooter = (event) => {
    event.preventDefault();

    router.push({
        pathname: '/',
        query: { pid: event.target.getAttribute("data-key") },
    }, '/');
  };

  return (
    <div className="max-w-7xl m-auto mt-40 max-[600px]:mt-24">
      
      <hr className='bg-original h-px' />

      <div className='py-16 grid grid-cols-3 px-5 max-[600px]:flex max-[600px]:flex-col max-[600px]:gap-12'>
        <div className='logo-footer'>
          <Image src='/images/logo.svg' width={150} height={150} alt='logo' />
        </div>

        <div>
          <p className='font-butlerregular text-2xl text-original mb-3'>QUICK LINKS</p>

          <ul className='font-avenirmedium text-siva font-normal'>
            <li className='mb-1 cursor-pointer'>
              <a href='' data-key="0" onClick={openPageFromFooter}>Homepage</a>
            </li>
            <li className='mb-1 cursor-pointer'>
              <a href='' data-key="1" onClick={openPageFromFooter}>About Us</a>
            </li>
            <li className='mb-1 cursor-pointer'>
              <a href='' data-key="4" onClick={openPageFromFooter}>Our Brands/Clients</a>
            </li>
            <li className='mb-1 cursor-pointer'>
              <a href='' data-key="6" onClick={openPageFromFooter}>Contact Us</a>
            </li>
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
  