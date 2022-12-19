

export default function CustomButton(props){

    return (
        <>
        <a href={props.link ? props.link : '#'} className='border-original border bg-transparent py-2 px-8 text-original rounded-sm
        hover:bg-original hover:text-white transition-all duration-700 text-center cursor-pointer'>
        {props.title}
        </a>
        </>
    )

}