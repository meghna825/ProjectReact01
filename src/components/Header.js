import {LOGO_URL} from '../utils/constant';
import  '../../style.css';
import {useState} from 'react';
import { Link,Navigate } from 'react-router-dom';

const Header = ()=>{
    const [btnNameReact,setbtnNameReact] = useState('Login')
    const [openLoginForm,setOpenLoginForm] = useState(false)
    console.log("Header Component")
    return (
        <div className='header'>
            <div className='logo'><img src={LOGO_URL}/></div>
            <div className='nav-items'>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to ="/contact-us">Contact Us</Link></li>
                    <li>Cart</li>
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