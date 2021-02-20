import {useState} from 'react'
import {useRouter} from 'next/router';

const countries = [{
    label:'us',
    name:'united states'
},
{
    label:'br',
    name:'brazil'
}]
const Header = () => {
    const router = useRouter();
    const [selectedCountry,setSelectedCountry] = useState(router.query.country)

    console.log('HEADER->ROUTER',router)
    console.log('HEADER->ROUTER',router.query.country)
    const handleChange = (e) => {
        console.log('selected country: ',e.target.value)
        setSelectedCountry(e.target.value)
        // router.push(`/${e.target.value}`); //but page is going to entirely refresh , try to do it on client side, not from server and refresh it;
        router.push(`/[country]`,`/${e.target.value}`); // now rendering on client side, its not refreshing full page
    }
    const renderCountries = () => {
        return countries.map(country => {
            return <option value={country.label}>{country.name}</option>
        })
    }
    return (
        <div>
            <select onChange={handleChange}
            value={selectedCountry}>
                {renderCountries()}
            </select>
        </div>
    )
}

export default Header