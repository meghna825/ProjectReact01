import {configureStore} from "@reduxjs/toolkit";
import CardReducer from './cartSlice';
import UserReducer from './userSlice'

const AppStore = configureStore({
    reducer:{
        cart:CardReducer,   //added slices to store
        user:UserReducer
    }
}); //Build store
export default AppStore