import { useState,useEffect } from "react"
import {MENU_URL} from "./constant"
const useRestaurantMenu =(resId)=>{
const [resInfo,setResInfo]=useState([])
useEffect(()=>{
    fetchMenuApi()
},[])
const fetchMenuApi =async ()=>{
    const data = await fetch(MENU_URL+resId)
    const json = await data.json()
    setResInfo(json?.data?.cards)
}
return resInfo
}
export default useRestaurantMenu