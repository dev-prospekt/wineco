import Image from 'next/image'
import Link from 'next/link'

export default function BlogItem({blog}) {
  return (
    <Link href={`/blog/${blog.id}`}>
        <Image src={blog.image} width={360} height={270} alt='blog' className='h-32 object-cover' />

        <div className='p-5'>
            <p className='font-extrabold text-lg text-original font-butlerregular tracking-widest mb-4
            max-[600px]:text-sm'>
                { blog.name }
            </p>

            <p className='text-textcolor text-base font-light mb-4 max-[600px]:text-xs'>
                { blog.desc.substring(0, 100) + "..." }
            </p>

            <span className='text-original text-base font-bold flex items-center max-[600px]:text-xs'>
                <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                { blog.date }
            </span>
        </div>
    </Link>
  )
}
