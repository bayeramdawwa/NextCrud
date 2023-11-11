import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import coursesSlice from "./slices/courses.slice";
import teacherSlice from "./slices/teacher.slice";
import studentSlice from "./slices/student.slice";

const reducers = {
  reducer: {
    courses: coursesSlice,
    teachers: teacherSlice,
    students: studentSlice,
  },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;
