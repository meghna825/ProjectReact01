import React from 'react';
import  ReactDOM  from 'react-dom/client';
import  '../style.css';
import Header from './components/Header';
import Body from './components/Body';




const AppLayout =()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}
//root.render(<Title/>)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)