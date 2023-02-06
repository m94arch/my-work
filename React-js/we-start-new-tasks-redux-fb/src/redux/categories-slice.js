import { createSlice } from "@reduxjs/toolkit";

let categoriesSlice = createSlice({
  name: "categories-slice",
  initialState: { data: []},
  reducers: {
    create(state, action) {
      // state.data = [action.payload,...state.data];
      state.data.push(action.payload);
    },

    read(state, action) {
      state.data = action.payload;
    },

    update(state, action) {
      let index = state.data.findIndex(
        (element) => element.id == action.payload.category.id 
      );
      state.data[index] = action.payload.category;
    },

    delete(state, action) {
      let filteredData = state.data.filter(
        (element) => element.id != action.payload
      );
      state.data = filteredData;
    },

    // Filtered
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;
