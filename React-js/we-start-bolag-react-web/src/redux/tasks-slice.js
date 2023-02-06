import { createSlice } from "@reduxjs/toolkit";

let tasksslice=createSlice({
    name:"tasks-slice",
    initialState:{data :[],filteredData:[] , task:{} ,Data:"All",Category:"All" },
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

              filterBYCategory(state,action){
                state.Category=action.payload;
                  if(action.payload=="All"){
                  state.filteredData=state.data;
              }else{
                  state.filteredData=state.data.filter((element) =>element.categoryId == action.payload);
      
              }
       
              },

              filterBySearch(state, action) {
                if (action.payload!= "") {
                  state.filteredData = state.data.filter((element) =>
                    element.title.includes(action.payload)
                  );
                } else {
                  state.filteredData = state.filteredData;
                }
              },
    


              filterBYDate(state,action){
                  if(action.payload== "All"){
                  state.filteredData=state.data;
              }else{
                  state.filteredData=state.data.filter((element) =>element.categoryDate == action.payload);
      
              }
              
       
              },
    },
});
export const tasksReducer=tasksslice.reducer;
export const tasksAction =tasksslice.actions;