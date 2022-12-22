
import Link from 'next/link'

export default function CustomButton(props){

    return (
        <>
        <Link href={props.link ? props.link : '#'}
        className='border-original font-avenirmedium border bg-transparent py-2 px-8 text-original rounded-sm
        hover:bg-original hover:text-white transition-all duration-700 text-center cursor-pointer hover:scale-110'>
        {props.title}
        </Link>
        </>
    )

}