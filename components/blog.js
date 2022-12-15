import Image from 'next/image'

export default function Blog() {
    return (
        <div className="homepage grid h-full">

            <div className="flex flex-col justify-center items-center relative mt-40">
                <div className="absolute bottom-4 -left-48">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <h1 className='font-butlerregular text-5xl text-original mb-7'>BLOG</h1>

                <div className='flex gap-6'>
                    
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

                <button className='border-original border bg-transparent py-2 px-8 mt-10 text-original rounded-sm
                hover:bg-original hover:text-white transition-all duration-700'>
                VIEW ALL
                </button>

            </div>
        </div>
    )
}