import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./CardSlice";

export const reduxStore =configureStore({reducer:cardReducer})