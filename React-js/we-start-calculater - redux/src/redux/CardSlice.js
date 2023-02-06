import { createSlice } from "@reduxjs/toolkit";

let cardSlice =createSlice({
name:"cardSice",
initialState:{ card:[]},
reducers:{
    create(state,action){
    state.data.push(action.payload); },
    read(state,action){
        state.card=action.payload },
    save(state,action){
        state.card = [action.payload,... state.card]  },
    delete(state,action){
        let fillterData=state.card.filter((Element) =>Element.id!= action.payload);
         
        state.card=fillterData;
     
    },
},


});
export const cardReducer =cardSlice.reducer;
export const cardAction =cardSlice.actions;