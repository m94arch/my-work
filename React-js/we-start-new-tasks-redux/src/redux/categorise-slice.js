import { createSlice } from "@reduxjs/toolkit";

let categoriseslice=createSlice({
    name:"categorise-slice",
    initialState:{data :[] , Category:{}},
    reducers:{
        create(state,action){
            state.data.push(action.payload);
        },
        read(state,action){
            state.data=action.payload;
        },
        edit(state , action){
            state.Category=state.data.find((element) => element.id == action.payload);

        },  
        update(state,action){
           
           let index = state.data.findIndex(
              (element) => element.id == action.payload.Category.id 
              );
          state.data[index] = action.payload.Category;
          console.log(state.data[index].name)
          console.log(state.data.length)
            },

        
        delete(state,action){
            let filteredate=state.data.filter((element)=>element.id!=action.payload);
            state.data=filteredate;
        },

    },
});
export const categoriseReducer=categoriseslice.reducer;

export const categoriseAction =categoriseslice.actions;