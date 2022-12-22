import { blogLists } from '../../json/data';
import Link from 'next/link';
import Image from 'next/image'
import CustomButton from '../../components/customButton';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import Footer from '../../components/footer';
import BlogItem from '../../components/blogItem';

export const getStaticProps = async ({ params }) => {
    const blogListsList = blogLists.filter((p) => p.id.toString() === params.blogId);

    return {
        props: {
            blog: blogListsList[0],
        },
    };
};

export const getStaticPaths = async ({locales}) => {
    const paths = blogLists.map((blog) => locales.map((locale) => ({
        params: { blogId: blog.id.toString() },
        locale
    }))).flat()

    return { 
        paths,
        fallback: false 
    };
};

export default ({ blog }) => {
    useEffect(() => {
        document.body.classList = '';
        document.body.classList.add("blog-single-page");
    });

    const { t } = useTranslation('common')

    return (
        <>
        <div className="about-page max-w-7xl m-auto mb-20">

            <div className="flex flex-col justify-center items-start relative">

                <div className="absolute -left-48 top-96">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <div className='content max-w-6xl mx-auto bg-white shadow-original-shadow 
                overflow-hidden rounded-xl mt-40'>
                    <img src={blog.image} className='w-full h-475 object-cover max-[600px]:h-52' />

                    <div className='text-lg font-avenirmedium p-20 max-[600px]:p-5'>
                        <h1 className='font-butlerregular text-5xl text-original mb-5'>
                        {blog.name}
                        </h1>

                        <span className='text-original text-base font-bold flex items-center'>
                            <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                            { blog.date }
                        </span>

                        <p className='mt-5' dangerouslySetInnerHTML={{ __html: blog.desc }} />
                    </div>
                </div>

                <div className='max-w-6xl mx-auto mt-24'>

                    <p className='font-butlerregular text-5xl text-original mb-5 text-center'>
                    MOGLO BI VAS ZANIMATI
                    </p>
                    
                    <div className='flex gap-6 mb-10 max-[600px]:flex-wrap max-[600px]:justify-center mt-10'>
                    { blogLists.slice(-3).map((item, key) => (
                        <div key={key} className='bg-white overflow-hidden rounded-lg max-w-17rem shadow-original-shadow'>
                            <BlogItem blog={item} />
                        </div>
                    )).reverse() }
                    </div>

                </div>

            </div>
        </div>

        <Footer />
        </>
    )
}