import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./slice/wishlistslice";

 const store =configureStore({
    reducer:{
     wishlistReducer:wishlistslice    }
 })

 export default store