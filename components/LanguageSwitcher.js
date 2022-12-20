import { useRouter } from "next/router";

function LanguageSwitcher() {
    const router = useRouter();
    
    const handleLocaleChange = (event) => {
        const value = event.target.value;
    
        router.push(router.route, router.asPath, {
          locale: value,
        });
    };

    return(
        <div>
            <select onChange={handleLocaleChange} value={router.locale}>
                <option value="en">ENG</option>
                <option value="hr">HR</option>
            </select>
        </div>
    )
}

export default LanguageSwitcher