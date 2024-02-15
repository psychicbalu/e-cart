import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name :'wishlistslice',
    initialState:[],
    reducers :{
        addTowishlist : (state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addTowishlist}= wishlistslice.actions
export default wishlistslice.reducer