import { CDN_URL } from "../utils/constant"
const ItemList = ({itemList})=>{
 
        return (
        <div>
             {itemList.map((item)=>{
                const info = item?.card?.info
                return(
                    <div key = {info.id} className="p-2 m-2 border-gray 200 border-b-2 text-left flex justify-between" >
                       
                       <div className="w-9/12">
                            <div className="py-2">
                                <span>{info.name}</span>
                                <span>{" "} ₹ {(info.price || info.defaultPrice)/100}</span>
                            </div>
                            <p className="text-xs">{info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-2 mx-5 rounded-lg bg-white  shadow-lg mx-16">Add + </button>
                            </div>
                            <img className="w-full" src = {CDN_URL+info.imageId}/>
                        </div>
                    </div>
                )
             })}
          
        </div>
    )
}
export default ItemList