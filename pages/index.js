// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import axios from 'axios';
import Router from 'next/router';

export default function Home() {
  return (
    <div>
        this is my home page {process.browser}
    </div>
  )
}

Home.getInitialProps = (context) => {
  const country = context.query.country || 'us';
  console.log('browser',process.browser)
  process.browser ? //if for client side and else for server side(like refresh)
   Router.replace('/[country]',`${country}`) : context.res.writeHead(302,{Location:`/${country}`});
   context.res.end(); // its necessary to end bcoz will load forever and never finished  so we wont see any response
  return {
    test:'testing'
  }
}
// we have two ways to redirect user either from client side or server side. both are different ... with browser property we get to know



//to set routing after login

// const authenticate = context => {
//   const {token} = cookies.get(context); //checking if cookies present , if it is not present ,redirect user to signin page
//   cookies.set(context,'plannedRoute', JSON.stringify({as:context.asPath,href:context.pathname}),{path:'/'})
//   if(!token){
//     Router.push('/signin')
//   }
//   try{
//     const res = await axios.post('path', {..signinfo});
//     cookies.set(null,'token',response.data.token,{path:'/'})
//     const {plannedRoute} = cookies.get()
//     const parsedPlannedRoute = plannedRoute && JSON.parse(plannedRoute)
//     const plannedHrefRoute = parsedPlannedRoute ? parsedPlannedRoute.href : '/[country]'
//     const plannedAsRoute = parsedPlannedRoute ? parsedPlannedRoute.as : 'us'
//     // router.replace('/[country]','/us')
//     router.replace(plannedHrefRoute,plannedAsRoute)
//   }
// }

// const handleSignout = () => {
//   cookies.destroy(null,'token')
// }