import { createSlice } from "@reduxjs/toolkit";
import { get, getById } from "../actions/students.action";

const studentsReducer = createSlice({
  name: "students",
  initialState: {
    data: [],
    studentById: {},
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.studentById = action.payload;
    });
  },
});

export default studentsReducer.reducer;
