import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';

export default function FullScreenMenu({open, setOpen}){
    const router = useRouter();
    const [data, setData] = useState([])
    const { i18n, t } = useTranslation('common')
        
    useEffect(() => {
        fecthNavigation()
    }, [i18n.language])

    const fecthNavigation = async () => {
        await fetch(`/api/menu?lang=${i18n.language}`)
        .then(response => response.json())
        .then(json => {
            setData(json.data.attributes.Link)
        })
    }

    const openHambClick = (event) => {
        event.preventDefault();

        setOpen(!open)

        router.push({
            pathname: '/',
            query: { pid: event.target.getAttribute("data-key") },
        }, '/');
    };
    
    return (
        <div className={`fullscreenmenu absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-y-0" : "-translate-y-full"} 
        transition-transform duration-500 ease-in-out filter`}>
            
            <div className="navigat flex flex-col justify-center items-center mt-48 max-[400px]:mt-36">

                { 
                data.map(( menu, key ) => (
                    <Link href='' key={key} id="navLink" data-key={menu.data_key} onClick={openHambClick}
                    className="font-butlerregular text-white text-4xl my-4 
                    border border-transparent p-3 pt-4 hover:border-white max-[400px]:my-2 uppercase">
                        { menu.title }
                    </Link>
                ))
                }

            </div>  
        </div>
    )
    
}