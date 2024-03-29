import {LOGO_URL} from '../utils/constant';
import  '../../style.css';
import {useState,useContext} from 'react';
import { Link,Navigate } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux'

const Header = ()=>{
    // to subscribe the data from store using selector
    const cartItems = useSelector((store)=>{
         return store.cart.items})
    console.log("cartItems",cartItems)
    const [btnNameReact,setbtnNameReact] = useState('Login')
    const [openLoginForm,setOpenLoginForm] = useState(false)
    const onlineStatus = useOnlineStatus()
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className='header'>
            <div className='logo'><img src={LOGO_URL}/></div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                <li className="px-4">Online Status:{onlineStatus?'✅':'🔴'}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to = "/about">About</Link></li>
                <li className="px-4"><Link to ="/contact-us">Contact Us</Link></li>
                <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to ="/cart">Cart-({cartItems.length})</Link></li>
                    <li className="px-4">User:{loggedInUser}</li>
                    <button className='login' onClick={(e)=>{
                        if(btnNameReact == "login"){
                            console.log("herer")
                            setbtnNameReact('logout')
                            setOpenLoginForm(true)
                          
                        }else{
                            setOpenLoginForm(false)
                            setbtnNameReact('login')
                            setOpenLoginForm(false)
                        }
                        
                    }}>{btnNameReact}</button>
                </ul> 
            </div>
            {openLoginForm?<Navigate to={'/login-page'} replace = {true}/>:""}
        </div>
    )
}
export default Header   