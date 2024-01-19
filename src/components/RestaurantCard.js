import {CDN_URL} from "../utils/constant"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const RestuarantCard = (props)=>{
    const {loggedInUser} = useContext(UserContext)
    const {resData} = props
    const { name,costForTwo,avgRating,cuisines,cloudinaryImageId} = resData?.info
    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
            <img className='res-logo'src = {CDN_URL+cloudinaryImageId} alt ='res-logo'/>
            <h3 className="font-bold py-4 text-lg text-wrap">{name}</h3>
            <span>{avgRating} stars</span>
            <br/>
            <span>{costForTwo}</span>
            <br/>
            <br/>
            <span className='text-wrap cuisine-list'>{cuisines.join(',')}</span>
            <br/>
            <span>UserName:{loggedInUser}</span>
        </div>
    )
}
export const withHighRatingLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg over">Top Rated</label>
            <RestaurantCard {...props}/>
            </>
        )
    }
} 
export default RestuarantCard