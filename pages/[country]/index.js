import axios from 'axios';
import {useEffect} from 'react';

const CountryTest = ({shows}) => {
    // console.log('propssss',props.shows)

    const renderShows = () => {
        return shows.map((show,index) => {
            return(
                <li key={index}>{show.show.name}</li>
            )
        })
    }
// useEffect(() => {
//      axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
//      .then(response => console.log(response.data))
// },[])


return (
    <ul className="tvshows">{renderShows()}</ul>
)
}

CountryTest.getInitialProps = async (context) => { //its happening on server side
    console.log('context ==> ',context)
    const country = context.query.country || 'us'
    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    // .then(response => console.log(response.data))
    return {
        shows:response.data
    }
}

export default CountryTest