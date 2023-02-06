import { createSlice } from "@reduxjs/toolkit";

let categoriseslice = createSlice({
    name:"categorise-slice",
    initialState:{data :[] ,filtereData:[] },
    reducers:{
        create(state,action){
            state.data.push(action.payload);
        },
        read(state,action){
            state.data=action.payload;
        }, 
       
        update(state,action){ 
   
        },
        
        delete(state,action){
            let filteredate=state.data.filter((element)=>element.id!=action.payload);
            state.data=filteredate;
        },
      


    },
});

export const categoriseReducer=categoriseslice.reducer;

export const categoriseAction =categoriseslice.actions;