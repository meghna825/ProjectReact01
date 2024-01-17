import Shimmer from "./ShimmerUI"
import { useParams } from 'react-router-dom'
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu = ()=>{
   
    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)
    if(resInfo.length == 0){
        return (<Shimmer/>)
    }
    const {name,cuisines,costForTwoMessage} = resInfo[0]?.card?.card?.info
    const {itemCards} = resInfo[2].groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card

    return (
  
        <div className="menu">
            <h1>{name}</h1>
            <img src = ""/>
            <span>{cuisines.join(',')}</span>
            <br/>
            <span>{costForTwoMessage}</span>
            <h2>Menu</h2>
            <ul>
              {itemCards?.map((item)=>{
              
               return(
                <li key = {item.card.info.id}>
                    {item.card.info.name} 
                    <br/>
                    <span>Rs.{(item.card.info.price || item.card.info.defaultPrice)/100}</span>
                
                </li>
               )
               
              })}
                
                
            </ul>

        </div>
        
    )
   
}
export default RestaurantMenu