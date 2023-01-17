import { blogLists } from '../../json/data';
import Link from 'next/link';
import Image from 'next/image'
import CustomButton from '../../components/customButton';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import Footer from '../../components/footer';
import BlogItem from '../../components/blogItem';
import Datee from '../../components/date'
import RelatedProducts from '../../components/relatedProducts';

export const getStaticPaths = async ({locales}) => {
    const blogs = await fetch(`https://strapi.wine-co.hr/api/blogs`)
    .then(response => response.json())
    .then(json => json.data);

    const paths = blogs.map((blog) => locales.map((locale) => ({
        params: { blogId: blog.id.toString() },
        locale
    }))).flat()

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params, locale }) => {
    const data = await fetch(`https://strapi.wine-co.hr/api/blogs/${params.blogId}?locale=${locale}&populate=*`)
    .then(response => response.json())
    .then(json => json.data);

    return {
        props: {
            blog: data,
        },
    };
};

export default ({blog}) => {
    useEffect(() => {
        document.body.classList = '';
        document.body.classList.add("blog-single-page");
    });

    return (
        <>
        <div className="about-page max-w-7xl m-auto mb-20">

            <div className="flex flex-col justify-center items-start relative">

                <div className="fixed -left-10 top-96 max-[600px]:w-36">
                    <Image src="/images/bomb1.svg" alt="image" width={500} height={500} />
                </div>

                <div className='content max-w-6xl mx-auto bg-white shadow-original-shadow 
                overflow-hidden rounded-xl mt-40'>
                    <img src={`http://strapi.wine-co.hr${blog.attributes?.image.data.attributes.url}`} 
                    className='w-full h-475 object-cover max-[600px]:h-52' />

                    <div className='text-lg font-avenirmedium p-20 max-[600px]:p-5'>
                        <h1 className='font-butlerregular text-5xl text-original mb-5 uppercase max-[600px]:text-xl'>
                        {blog.attributes?.title}
                        </h1>

                        <span className='text-original text-base font-bold flex items-center'>
                            <Image src='/images/date-icon.svg' width={15} height={15} alt='date icon' className='mr-2' />
                            <Datee dateString={blog.attributes?.createdAt} />
                        </span>

                        <div className='mt-5 font-butlerregular text-textcolor max-[600px]:text-lg' 
                        dangerouslySetInnerHTML={{__html: blog.attributes?.content }} />
                    </div>
                </div>

                <div className='max-w-6xl mx-auto mt-24'>

                    <p className='font-butlerregular text-5xl text-original mb-5 text-center max-[600px]:text-xl'>
                        MOGLO BI VAS ZANIMATI
                    </p>
                    
                    <RelatedProducts />

                </div>

            </div>
        </div>

        <Footer />
        </>
    )
}