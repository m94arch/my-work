import { configureStore } from "@reduxjs/toolkit";
import { categoriseReducer } from "./categorise-slice";
import { ProductReducer } from "./product_slice";
import { StockReducer } from "./Stock-slice";


export const reduxstore=configureStore({
reducer:{
    product:ProductReducer,
    categories:categoriseReducer,
    Stock:StockReducer,

},

});