import { createSlice } from "@reduxjs/toolkit";
import { get, getById } from "../actions/teachers.action";

const teachersReducer = createSlice({
  name: "teachers",
  initialState: {
    data: [],
    teacherById: {},
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.teacherById = action.payload;
    });
  },
});

export default teachersReducer.reducer;
