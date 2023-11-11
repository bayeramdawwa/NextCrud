import AddNewCourseForm from "@/components/Courses/AddCourse/AddNewCourseForm";
import EditCourseForm from "@/components/Courses/EditCourse/EditCourseForm";
import DashbordLayouts from "@/layouts/DashbordLayouts";
import React from "react";

export default function index() {
  return (
    <DashbordLayouts>
      <EditCourseForm />
    </DashbordLayouts>
  );
}
