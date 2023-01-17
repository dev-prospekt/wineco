import { i18n, useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'
import BlogItem from './blogItem'

export default function RelatedProducts() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        const langcc = i18n.language == 'undefined' ? 'en' : i18n.language;
        await fetch(`/api/blogs?lang=${langcc}&populate=*`)
        .then(response => response.json())
        .then(json => {
            setData(json.data)
        })
    }

    return (
        <div className='flex gap-6 mb-10 max-[600px]:flex-wrap max-[600px]:justify-center mt-10'>
            { data.slice(-3).map((item, key) => (
                <div key={key} className='bg-white overflow-hidden rounded-lg max-w-17rem shadow-original-shadow'>
                    <BlogItem blog={item} />
                </div>
            )).reverse() }
        </div>
    )
}
