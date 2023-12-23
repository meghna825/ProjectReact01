import  '../../style.css';
import RestuarantCard from './RestaurantCard';
import restList from '../utils/mockData';
import { useState } from 'react';
const Body = ()=>{
    const [listOfRestaurants,setlistOfRestaurant] = useState(restList)
    const [searchInput,setsearchInput] = useState(null)
    // Normal JS
    let listOfRestaurantJS = [
        { 
        "info": {
        "id": "59274",
        "name": "Rominus Pizza And Burger",
        "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
        
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Pizzas",
          "Italian-American",
          "American",
          "Barbecue",
          "Snacks",
          "Grill",
          "Italian",
          "Pastas",
          "Sweets",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2}},
        {
            "info": {
                "id": "89273",
                "name": "KFC",
                "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
                
                "costForTwo": "₹600 for two",
                "cuisines": [
                 
                  "Barbecue",
                  "Snacks",
                "Non veg"
                ],
                "avgRating": 3.2}
        }
    ]

    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={()=>{
                   const filteredList =  listOfRestaurants.filter((rest)=>
                         rest.info.avgRating>4.00
                    )
                    setlistOfRestaurant(filteredList)
                   
                }}>Top Rated Button</button>
                {/* <div id="search-container">
                    <input type="text" id="search-input" placeholder="Enter your search term" value = {searchInput} onChange={(e)=>setsearchInput(e.target.value)}/>
                    <button id="search-button" onClick= {(e)=>{

                    }}>Search</button>
            </div> */}
            </div>
                <div className='res-body'>
                        <h2 className='title'>What's on your mind?</h2>
                    <div className='res-container'>
                        {listOfRestaurants.map(restuarant=><RestuarantCard key = {restuarant.id} resData = {restuarant}/>)}
                       
                    </div>
                </div>
            </div>
    )
}
export default Body