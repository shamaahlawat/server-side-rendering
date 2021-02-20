// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
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
