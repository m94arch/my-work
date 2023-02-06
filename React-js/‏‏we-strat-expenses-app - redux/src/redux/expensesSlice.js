import { createSlice } from "@reduxjs/toolkit";

let expensesSlice =createSlice({
    name: "expenses-slice",
    initialState: {expenes:[]},
    reducers: {

        save(state, action) {
            state.expenes = [action.payload,... state.expenes]
        },
        read(state, action) {
           state.expenes=action.payload
        },
        delete(state, action) {
            let fillterData=state.expenes.filter((Element) =>Element.id!= action.payload);
         
           state.expenes=fillterData;
        
        },
    
    },
});
export const expenseReducer = expensesSlice.reducer;
export const expenseActions = expensesSlice.actions;
