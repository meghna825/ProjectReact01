import {CDN_URL} from "../utils/constant"


const RestuarantCard = (props)=>{
    const {resData} = props
    const { name,costForTwo,avgRating,cuisines,cloudinaryImageId} = resData?.info
    return(
        <div className='res-card'>
            <img className='res-logo'src = {CDN_URL+cloudinaryImageId} alt ='res-logo'/>
            <h3>{name}</h3>
            <span>{avgRating} stars</span>
            <br/>
            <span>{costForTwo}</span>
            <br/>
            <br/>
            <p className='cuisine-list'>{cuisines.join(',')}</p>
            
        </div>
    )
}
export default RestuarantCard