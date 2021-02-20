import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast';
import Header from '../../components/Header'
const ShowDetails = ({allshow}) => {
    const {name,image,summary,_embedded} = allshow;
 return (
     <div>
         <Header />
         <div className="cover" style={{backgroundImage:`url(${image.original})`}}></div>
         <h1>{name}</h1>
         <p>{parse(summary)}</p>
         <Cast cast={_embedded.cast}/>
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
    console.log('see in terminal console',query)
    const { show } = query;
   const response = await axios.get(`http://api.tvmaze.com/shows/${show}?embed=cast`)

   return {
       allshow:response.data
   }
}
export default ShowDetails