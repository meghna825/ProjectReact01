import { useState,useEffect } from "react"
import Shimmer from "./ShimmerUI"
import { useParams } from 'react-router-dom'
const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState([])
    const { resId } = useParams()
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=65797&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json()
        setResInfo(json.data.cards)
        
    }
    if(resInfo.length == 0){
        return (<Shimmer/>)
    }
    const {name,cuisines,costForTwoMessage} = resInfo[0]?.card?.card?.info
    const {itemCards} = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  
   //const [itemList] = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.
    return (
  
        <div className="menu">
            <h1>{name}</h1>
            <img src = ""/>
            <span>{cuisines.join(',')}</span>
            <br/>
            <span>{costForTwoMessage}</span>
            <h2>Menu</h2>
            <ul>
              {itemCards.map((item)=>{
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