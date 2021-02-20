const CustomError = ({statusCode}) => {
    if(statusCode === 404){
        return <div>resource not found</div>
    }
    return <h1>something went wrong</h1>
}

CustomError.getInitialProps = ({err , res}) => { //err on client side and res is from server side
    return {statusCode : res ? res.statusCode : err ? err.statusCode : 404 }
}

export default CustomError;
