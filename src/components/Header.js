import {LOGO_URL} from '../utils/constant';
import  '../../style.css';
import {useState} from 'react';

const Header = ()=>{
    const [btnNameReact,setbtnNameReact] = useState('Login')
    console.log("Header Component")
    return (
        <div className='header'>
            <div className='logo'><img src={LOGO_URL}/></div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                        if(btnNameReact == "login"){
                            setbtnNameReact('logout')
                        }else{
                            setbtnNameReact('login')
                        }
                        
                    }}>{btnNameReact}</button>
                </ul> 
            </div>

        </div>
    )
}
export default Header