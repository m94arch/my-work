import { createSlice } from "@reduxjs/toolkit";

let tasksSlice = createSlice({
  name: "tasks-slice",
  initialState: { data: [], filteredData: [], item: {} },
  reducers: {
    create(state, action) {
      // state.data = [action.payload,...state.data];
      state.data.push(action.payload);
      state.filteredData = state.data;
    },

    read(state, action) {
      state.data = action.payload;
      state.filteredData = state.data;
    },

    update(state, action) {
              let index = state.data.findIndex(
                (element) => element.id == action.payload.id
              );
              state.data[index] = action.payload;
              state.filteredData = state.data;
              state.item = action.payload;
    },

    delete(state, action) {
      let filteredData = state.data.filter(
        (element) => element.id != action.payload
      );
      state.data = filteredData;
    },

    // Filtered
    filterByCategory(state, action) {
      if (action.payload == "All") {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter(
          (element) => element.categoryId == action.payload
        );
      }
    },

    filterBySearch(state, action) {
      if (action.payload != "") {
        state.filteredData = state.data.filter((element) =>
          element.name.includes(action.payload)
        );
      } else {
        state.filteredData = state.data;
      }
    },
    filterByStatus(state, action) {
      if (action.payload != "All") {
        state.filteredData = state.data.filter((element)=>element.status == action.payload)
      } else {
        state.filteredData = state.data;
      }
    },
    setItem(state, action) {
      state.item = action.payload;
    },
    updateStatus(state, action) {
      // state.item.status = action.payload;
            // action.payload.task.status = action.payload.status;
            // state.item = { ...action.payload };

            let index = state.data.findIndex(
              (element) => element.id ==action.payload.id
            );
            state.data[index] = action.payload;
            state.filteredData= state.data;
            state.item = action.payload ;

    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = tasksSlice.actions;
