import AddNewCourseForm from "@/components/Courses/AddCourse/AddNewCourseForm";
import DashbordLayouts from "@/layouts/DashbordLayouts";
import React from "react";

export default function index() {
  return (
    <DashbordLayouts>
      <AddNewCourseForm />
    </DashbordLayouts>
  );
}
