import axios from 'axios';
import Thumbnail from '../../components/Thumbnail'
// import {useEffect} from 'react';
import Link from 'next/link'
import cookies from 'nookies';

const CountryTest = ({shows,country}) => {
    // console.log('propssss',props.shows)

    const renderShows = () => {
        return shows.map((show,index) => {
            return(
                <li key={index}><Thumbnail imageUrl={show.image && show.image.medium} caption={show.name}
                href="/[country]/[show]"
                as={`/${country}/${show.id}`} /></li>
            )
        })
    }
// useEffect(() => {
//      axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
//      .then(response => console.log(response.data))
// },[])


return (
    <ul className="tvshows">
    {/* <Link href="/about">
       <a>About</a>
    </Link> */}
    {renderShows()}</ul>
)
}

CountryTest.getInitialProps = async (context) => { //its happening on server side
    console.log('context ==> ',context)
    const {defaultCountry} = cookies.get(context)
    const country = context.query.country || defaultCountry || 'us'
    const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    // .then(response => console.log(response.data))
    return {
        shows:response.data,
        country
    }
}

export default CountryTest