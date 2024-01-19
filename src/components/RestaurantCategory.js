import ItemList from "./ItemList"
const RestaurantCategory =({category,showItem,onClickSetShow})=>{
    const {title,itemCards } = category
    const handleClick = ()=>{
        onClickSetShow()
    }
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            {/**Header of Accordian */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                <span>{title} ({itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItem &&<ItemList itemList={itemCards}/> }
        </div>
    )
}
export default RestaurantCategory 