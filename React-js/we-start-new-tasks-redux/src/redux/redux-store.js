import { configureStore } from "@reduxjs/toolkit";
import { categoriseReducer, categorisesReducer } from "./categorise-slice";
import { tasksReducer } from "./tasks-slice";

export const reduxstore=configureStore({
reducer:{
    tasks:tasksReducer,
    categorises:categoriseReducer,
},

});