import { createSlice } from "@reduxjs/toolkit";

let Stockslice = createSlice({
    name:"Stock-slice",
    initialState:{data :[],Stock:[]},
    reducers:{
        create(state,action){
            state.data.push(action.payload);
        },
        read(state,action){
            state.data=action.payload;
        }, 
      
      


    },
});

export const StockReducer=Stockslice.reducer;

export const StockAction =Stockslice.actions;