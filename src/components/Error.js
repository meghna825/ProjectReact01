import {useRouteError} from 'react-router-dom'
const Error = ()=>{
    const error = useRouteError()
    console.log(error)
return(
    <div className="error">
        <h1>Oops Something went wrong</h1>
        <span>{error?.status + " "+ error?.data}</span>

    </div>
)
}
export default Error