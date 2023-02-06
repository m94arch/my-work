import { configureStore } from "@reduxjs/toolkit";
import { categoriseReducer } from "./categorise-slice";
import { tasksReducer } from "./tasks-slice";

export const reduxstore=configureStore({
reducer:{
    tasks:tasksReducer,
    categories:categoriseReducer,
},

});