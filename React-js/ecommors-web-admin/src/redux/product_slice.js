import { createSlice } from "@reduxjs/toolkit";

let Productslice=createSlice({
    name:"Product-slice",
    initialState:{data :[] ,filteredData:[] , task:[]},
    reducers:{
        create(state,action){
            state.data.push(action.payload);
            state.filteredData=state.data;
        },
        read(state,action){
            state.data=action.payload;
            state.filteredData=state.data;

        },
      
         
            

        delete(state,action){
            let filteredate=state.data.filter((element)=>element.id!=action.payload);
            state.data=filteredate;
            state.filteredData = state.data;
 
        },
        edit(state , action){
            state.task=state.data.find((element) => element.id == action.payload);
            state.filteredData = state.data;

        }, 
        update(state,action){ 
            let index = state.data.findIndex(
                (element) => element.id == action.payload.task.id

                );
            state.data[index] = action.payload.task;
            state.filteredData = state.data;
              },

    }
})

export const ProductReducer=Productslice.reducer;
export const ProductAction =Productslice.actions;
