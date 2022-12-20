import { blogLists } from '../../json/data';
import NextLink from 'next/link';
import Image from 'next/image'
import CustomButton from '../../components/customButton';

export const getStaticProps = async ({ params }) => {
    const blogListsList = blogLists.filter((p) => p.id.toString() === params.blogId);

    return {
        props: {
            blog: blogListsList[0],
        },
    };
};

export const getStaticPaths = async ({locales}) => {
    // const paths = blogLists.map((blog) => (
    //     {params: { blogId: blog.id.toString() }, locale: 'en'},
    //     {params: { blogId: blog.id.toString() }, locale: 'hr'}
    // ));

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
    return (
        <>
        <div className="about-page grid grid-cols-2 max-w-7xl m-auto mb-10">

            <div className="flex flex-col justify-between items-start relative mr-36 mt-40 mb-5 pl-10">
                <h1 className='font-butlerregular text-5xl text-original'>{blog.name}</h1>


                <div className='text-lg font-avenirmedium'>
                    <p className='mb-3'>
                        {blog.desc}
                    </p>
                </div>

                <div>
                    <CustomButton title='Back' link='/blogs' />
                </div>
            </div>

            <div className="relative">
                <img src='/images/about-page-bg.svg' alt="aboutus-bg" className='w-full h-screen' />

                <div className="absolute bottom-28 -right-28">
                    <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
                </div>
            </div>
        </div>
        </>
    )
}