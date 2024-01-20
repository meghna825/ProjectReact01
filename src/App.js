import React,{lazy,Suspense, useEffect, useState} from 'react';
import  ReactDOM  from 'react-dom/client';
import  '../style.css';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Error  from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login'
import UserContext from './utils/UserContext';
const Grocery = lazy(()=>import('./components/Grocery'))
import {Provider} from 'react-redux' // Provided store to our app
import AppStore from './utils/AppStore';
import Cart from './components/Cart';



const AppLayout =()=>{
    const [userName,setUserName] = useState()
    useEffect(()=>{
        const user = 'Meghna Mathur'
        setUserName(user)
    },[])
    return(
        <Provider store ={AppStore}>
            <UserContext.Provider value = {{loggedInUser:userName,setUserName}}>
                <div className='app'>
                    <UserContext.Provider value = {{loggedInUser:'Meghna'}}>
                        <Header/>
                    </UserContext.Provider>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact-us',
                element:<Contact/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/login-page',
                element:<Login/>
            },
            {
                path:'/grocery',
                element:
                <Suspense fallback = {<h1>Loading....</h1>}>
                    <Grocery/>
                </Suspense>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }
])
//root.render(<Title/>)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router ={appRouter}/>)