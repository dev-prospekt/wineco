import Image from 'next/image'
import Link from 'next/link'
import Datee from './date'

export default function BlogItem({blog}) {
  return (
    <Link href={`/blog/${blog.id}`}>
        <img src={`http://strapi.wine-co.hr${blog.attributes?.image.data.attributes.url}`} 
        width={360} height={270} alt='blog' className='h-32 object-cover' />

        <div className='p-5'>
            <p className='font-extrabold text-lg text-original font-butlerregular tracking-widest mb-4
            max-[600px]:text-sm uppercase'>
                { blog.attributes?.title }
            </p>

            <p className='blog-content-line text-textcolor font-butlerregular text-base font-light mb-4 max-[600px]:text-xs' 
            dangerouslySetInnerHTML={{__html: blog.attributes?.content }} />

            <span className='text-original text-base font-bold flex items-center max-[600px]:text-xs'>
                <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                <Datee dateString={blog.attributes?.createdAt} />
            </span>
        </div>
    </Link>
  )
}
