import Image from 'next/image'
import CustomButton from './customButton'

export default function Blog() {
    return (
        <div className="blog grid h-full">

            <div className="flex flex-col justify-center items-center relative mt-40">
                <div className="absolute bottom-4 -left-48">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <h1 className='font-butlerregular text-5xl text-original mb-7'>BLOG</h1>

                <div className='flex gap-6 mb-10'>
                    
                    <div className='bg-white overflow-hidden rounded-lg max-w-xs shadow-original-shadow'>
                        <Image src='/images/blog1.png' width={360} height={270} alt='blog' />

                        <div className='p-5'>
                            <p className='font-extrabold text-lg text-original font-butlerregular tracking-widest mb-4'>
                                LOREM IPSUM DOLOR SIT AMET
                            </p>

                            <p className='text-textcolor text-base font-light mb-4'>
                                Massa tempus enim malesuada ornare. Neque consequat elit nulla id integer egestas a.
                            </p>

                            <span className='text-original text-base font-bold flex items-center'>
                                <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                                2. studenog, 2022.
                            </span>
                        </div>
                    </div>
                    <div className='bg-white overflow-hidden rounded-lg max-w-xs shadow-original-shadow'>
                        <Image src='/images/blog1.png' width={360} height={270} alt='blog' />

                        <div className='p-5'>
                            <p className='font-extrabold text-lg text-original font-butlerregular tracking-widest mb-4'>
                                LOREM IPSUM DOLOR SIT AMET
                            </p>

                            <p className='text-textcolor text-base font-light mb-4'>
                                Massa tempus enim malesuada ornare. Neque consequat elit nulla id integer egestas a.
                            </p>

                            <span className='text-original text-base font-bold flex items-center'>
                                <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                                2. studenog, 2022.
                            </span>
                        </div>
                    </div>
                    <div className='bg-white overflow-hidden rounded-lg max-w-xs shadow-original-shadow'>
                        <Image src='/images/blog1.png' width={360} height={270} alt='blog' />

                        <div className='p-5'>
                            <p className='font-extrabold text-lg text-original font-butlerregular tracking-widest mb-4'>
                                LOREM IPSUM DOLOR SIT AMET
                            </p>

                            <p className='text-textcolor text-base font-light mb-4'>
                                Massa tempus enim malesuada ornare. Neque consequat elit nulla id integer egestas a.
                            </p>

                            <span className='text-original text-base font-bold flex items-center'>
                                <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                                2. studenog, 2022.
                            </span>
                        </div>
                    </div>

                </div>
                
                <CustomButton title='VIEW ALL' />

            </div>
        </div>
    )
}