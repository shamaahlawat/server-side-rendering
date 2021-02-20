import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast';
import Header from '../../components/Header'
import Error from 'next/error';
import CustomError from '../_error'

const ShowDetails = ({allshow = {},statusCode}) => {
    console.log('alllshows',allshow)
    const {name,image,summary,_embedded} = allshow;

    if(statusCode){
        // return <div>there was an error</div>
        // return <Error statusCode={statusCode} title="ooopsss there was a problem here"/>
        <CustomError />
    }
 return (
     <div>
         <Header />
         <div className="cover" style={{backgroundImage:`url(${image && image.original})`}}></div>
         <h1>{name && name}</h1>
         <p>{parse(summary && summary)}</p>
         <Cast cast={_embedded && _embedded.cast}/>
         <style jsx>
             {`.cover {
                 height:200px;
                 background-size:cover
             }`}
         </style>
     </div>
 )
}

ShowDetails.getInitialProps = async ({query}) => {
    try{
        console.log('see in terminal console',query)
        const { show } = query;
        const response = await axios.get(`http://api.tvmaze.com/shows/1?embed=cast`)
    //    const response = await axios.get(`http://api.tvmaze.com/shows/${show}?embed=cast`)
       console.log('response',response)
       return {
           allshow:response.data
       }
    }
    catch(error){
     statusCode : error.response ? error.response.status : 500 
    }
}
export default ShowDetails