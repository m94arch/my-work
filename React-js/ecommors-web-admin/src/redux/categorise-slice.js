import { createSlice } from "@reduxjs/toolkit";

let categoriseslice = createSlice({
    name:"categorise-slice",
    initialState:{data :[] ,filtereData:[] ,catogry:[]},
    reducers:{
        create(state,action){
            state.data.push(action.payload);
        },
        read(state,action){
            state.data=action.payload;
        }, 
       
        edit(state , action){
            state.catogry=state.data.find((element) => element.id == action.payload);
            state.filtereData = state.data;

        }, 
        update(state,action){ 
            let index = state.data.findIndex(
                (element) => element.id == action.payload.catogry.id 
                );
            state.data[index] = action.payload.catogry;
            state.filtereData = state.data;
              },
        
        delete(state,action){
            let filteredate=state.data.filter((element)=>element.id!=action.payload);
            state.data=filteredate;
        },
      


    },
});

export const categoriseReducer=categoriseslice.reducer;

export const categoriseAction =categoriseslice.actions;