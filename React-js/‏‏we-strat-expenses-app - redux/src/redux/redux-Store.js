import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./expensesSlice";

export const reduxStore =configureStore({reducer:expenseReducer})