import {useSelector,useDispatch} from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const handleClearItems = ()=>{
        
    }
    return(
        <div className="text-center m-4 p-4">
            <div>
            <h1 className="text-2xl font-bold">
                Cart
            </h1>
            <button className='p-2 m-2 bg-black text-white rounded-lg float-right' onClick = {handleClearItems}>Clear Cart</button>
            </div>
            <div className='w-6/12 m-auto border-r-0 shadow-lg'>
                {cartItems.length === 0?<h3>No items added in cart</h3>:
                <ItemList itemList = {cartItems}/>}
                
            </div>

        </div>
    )
}
export default Cart