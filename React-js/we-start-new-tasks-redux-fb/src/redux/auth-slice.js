import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

let authSlice = createSlice({
  name: "auth-slice",
  initialState: {
    loggedIn: JSON.parse(localStorage.getItem("logged_in")),
    token: localStorage.getItem("token"),
  },
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.token = action.payload;
    },
    register(state, action) {
      state.loggedIn = true;
      state.token = action.payload;
    },
    logout(state, action) {
      state.loggedIn = false;
    //   state.token = action.payload;
      state.token = "";
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
