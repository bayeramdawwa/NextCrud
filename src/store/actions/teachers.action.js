import apis from "@/const/apis";
import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get = createAsyncThunk("teachers/get", async () => {
  return await axiosInstance.get(apis.teachers.get).then((res) => {
    return res.data;
  });
});

export const getById = createAsyncThunk("teachers/get-by-id", async (id) => {
  return await axiosInstance.get(apis.teachers.getById(id)).then((res) => {
    return res.data;
  });
});
export const addNewTeacher = createAsyncThunk(
  "teachers/add",
  async (data) => {
    console.log(data);
    return await axiosInstance.post(apis.teachers.add, data).then((res) => {
      return res.data;
    });
  }
);
export const editTeacher = createAsyncThunk(
  "teachers/edit",
  async (data) => {
    return await axiosInstance.patch(apis.teachers.edit(data.id), data).then((res) => {
      return res.data;
    });
  }
);
export const deleteteacher = createAsyncThunk(
  "teachers/delete",
  async (data) => {
    return await axiosInstance.delete(apis.teachers.delete(data.id), data).then((res) => {
      return res.data;
    });
  }
);
