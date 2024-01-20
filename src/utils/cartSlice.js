import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state:Directly modifying the state
            state.items.push(action.payload)
            console.log(state.items)
        },
        removeItem:(state,action)=>{
            const index = state.items.findIndex(action.payload)
            if(index>-1){
                state.items.splice(index,1)
            }
            
        },
        clearCart:(state,action)=>{
            state.items.length =0
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer