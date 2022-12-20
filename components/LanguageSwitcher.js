import { useRouter } from "next/router";

function LanguageSwitcher({open}) {
    const router = useRouter();
    
    const handleLocaleChange = (event) => {
        const value = event.target.value;
    
        router.push(router.route, router.asPath, {
          locale: value,
        });
    };

    return(
        <div>
            <select onChange={handleLocaleChange} value={router.locale} 
            className={`bg-transparent outline-none border-none ${open ? "text-white" : "text-black"}`}>
                <option value="en" className={`${open ? "text-black" : "text-black"}`}>EN</option>
                <option value="hr" className={`${open ? "text-black" : "text-black"}`}>HR</option>
            </select>
        </div>
    )
}

export default LanguageSwitcher