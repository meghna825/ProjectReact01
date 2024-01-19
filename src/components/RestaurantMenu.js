import Shimmer from "./ShimmerUI"
import { useParams } from 'react-router-dom'
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from 'react'
const RestaurantMenu = ()=>{
   
    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)
    const [showIndex,setShowIndex] = useState(null)
    if(resInfo.length == 0){
        return (<Shimmer/>)
    }
    const {name,cuisines,costForTwoMessage} = resInfo[0]?.card?.card?.info
   
    const categories = resInfo[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c?.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     
    return (
  
        <div className="text-center m-30">
            <h1 className="text-2xl bold ">{name}</h1>
            <img src = ""/>
            <span>{cuisines.join(',')}</span>
            <br/>
            <span>{costForTwoMessage}</span>
            <h2>Menu</h2>
            <ul>
            {categories?.map((category,index)=>{
                return(
                    <RestaurantCategory 
                    key = {'category'+index} 
                    category = {category?.card?.card} 
                    showItem={index == showIndex} 
                    onClickSetShow={()=>{
                        setShowIndex((prevIndex)=>{
                         return   prevIndex === index?null:index
                        })
                    }} 
                  />
                )
            })}
                
                
            </ul>

        </div>
        
    )
   
}
export default RestaurantMenu