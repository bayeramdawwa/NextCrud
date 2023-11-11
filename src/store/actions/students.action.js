import apis from "@/const/apis";
import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get = createAsyncThunk("students/get", async () => {
  return await axiosInstance.get(apis.students.get).then((res) => {
    return res.data;
  });
});

export const getById = createAsyncThunk("students/get-by-id", async (id) => {
  return await axiosInstance.get(apis.students.getById(id)).then((res) => {
    return res.data;
  });
});
export const addNewStudent = createAsyncThunk(
  "students/add",
  async (data) => {
    console.log(data);
    return await axiosInstance.post(apis.students.add, data).then((res) => {
      return res.data;
    });
  }
);
export const editStudent = createAsyncThunk(
  "students/edit",
  async (data) => {
    return await axiosInstance.patch(apis.students.edit(data.id), data).then((res) => {
      return res.data;
    });
  }
);
export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (data) => {
    return await axiosInstance.delete(apis.students.delete(data.id), data).then((res) => {
      return res.data;
    });
  }
);
