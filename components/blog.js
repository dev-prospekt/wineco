import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './customButton'
import { blogLists } from '../json/data';

export default function Blog() {
    return (
        <div className="blog grid h-full">

            <div className="flex flex-col justify-center items-center relative mt-40">
                <div className="absolute bottom-4 -left-48">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <h1 className='font-butlerregular text-5xl text-original mb-7'>BLOG</h1>

                <div className='flex gap-6 mb-10'>

                    { blogLists.slice(-3).map((blog, key) => (
                        <div key={key} className='bg-white overflow-hidden rounded-lg max-w-xs shadow-original-shadow'>
                            <Link href={`/blog/${blog.id}`}>
                                <Image src={blog.image} width={360} height={270} alt='blog' />

                                <div className='p-5'>
                                    <p className='font-extrabold text-lg text-original font-butlerregular tracking-widest mb-4'>
                                        { blog.name }
                                    </p>

                                    <p className='text-textcolor text-base font-light mb-4'>
                                        { blog.desc }
                                    </p>

                                    <span className='text-original text-base font-bold flex items-center'>
                                        <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                                        { blog.date }
                                    </span>
                                </div>
                            </Link>
                        </div>
                    )).reverse() }

                </div>
                
                <CustomButton title='VIEW ALL' />

            </div>
        </div>
    )
}