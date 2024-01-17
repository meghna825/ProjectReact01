import  '../../style.css';
import RestuarantCard from './RestaurantCard';
import { useState,useEffect } from 'react';
import Shimmer from './ShimmerUI';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = ()=>{
    const [listOfRestaurants,setlistOfRestaurant] = useState([])
    const [allistOfRestaurants,setallistOfRestaurant] = useState([])
    const [searchInput,setsearchInput] = useState('')
    const onlineStatus = useOnlineStatus()
    let allList = []
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
    const filterSearch = (e,type = null)=>{
        let filteredList = allistOfRestaurants
        if(type == 'clear'){
            setsearchInput('')
            setlistOfRestaurant(allistOfRestaurants)
        }else{
            if(searchInput){
                filteredList = filteredList.filter((item)=>{
                    if(( item?.info?.name.toLowerCase().includes(searchInput.toLowerCase()))||
                   (item?.info?.costForTwo.toLowerCase().includes(searchInput.toLowerCase()))){
                            return item
                        }  
                })   
            }
            setlistOfRestaurant(filteredList)
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        try{
            let  list = []
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data?.json()
        if(json?.data?.cards.length>0){
            const allresturant = json.data.cards
          //  console.log(allresturant,"dd")
          list =json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        }
        setallistOfRestaurant(list)
        setlistOfRestaurant(list)
        }catch(e){
            console.log(e)
            toast.error("Runtime error", {
                // Set to 15sec
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 15000,
            })
        }
        
       
    }
    if(onlineStatus == false){
        return(
            <h1>
                You're currently offline,please check your internet connection
            </h1>
        )
    }
    return allistOfRestaurants.length == 0?
    <>
        <Shimmer/>
        <ToastContainer/>
    </>:
    (<>
        <div className='body'>
            <div className='filter'>
            <div className ='search'id="search-container">
                    <input type="text" id="search-input" placeholder="Enter your search term" value = {searchInput} onChange={(e)=>setsearchInput(e.target.value)}/>
                    <button id="search-button" onClick= {(e)=>filterSearch(e)} style={{"marginRight":"10px"}}>Search</button>
                    <button id="clear-button" onClick= {(e)=>filterSearch(e,'clear')}>Clear</button>
            </div>
                <button className='filter-btn' onClick={()=>{
                   const filteredList =  listOfRestaurants.filter((rest)=>
                         rest.info.avgRating>4.00
                    )
                    setlistOfRestaurant(filteredList)
                   
                }}>Top Rated Button</button>
                
            </div>
                <div className='res-body'>
                        <h2 className='title'>What's on your mind?</h2>
                    <div className='res-container'>
                        {listOfRestaurants.map(restuarant=>
                        <Link to ={'/restaurant/'+restuarant.info.id}>
                            <RestuarantCard key = {restuarant.info.id} resData = {restuarant}/>
                        </Link>
                        )}
                       
                    </div>
                </div>
            </div>
            <ToastContainer/>
            </>
    )
}
export default Body