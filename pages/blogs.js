import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../components/customButton'
import { blogLists } from '../json/data';

export default function Blogs() {
    return (
        <div className="blog grid h-full max-w-7xl m-auto">

            <div className="flex flex-col justify-center items-center relative mt-40">

                <h1 className='font-butlerregular text-5xl text-original mb-7'>BLOG</h1>

                <div className='grid grid-cols-4 gap-6 mb-10'>

                    { blogLists.map((blog, key) => (
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

            </div>
        </div>
    )
}