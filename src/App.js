import React from 'react';
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



const AppLayout =()=>{
    return(
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
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
            }
        ],
        errorElement:<Error/>
    }
])
//root.render(<Title/>)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router ={appRouter}/>)