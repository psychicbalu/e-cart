import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>
        {
          return state.filter(item=>item.id!=action.payload)
        },
        emptycart:(state)=>{
            return state=[]
        }
    }
})
export const {addtocart,removeFromCart,emptycart}=Cartslice.actions
export default Cartslice.reducer