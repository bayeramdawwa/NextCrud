
import AddNewStudentForm from "@/components/Student/AddStudent/AddNewStudentForm";
import DashbordLayouts from "@/layouts/DashbordLayouts";
import React from "react";

export default function index() {
  return (
    <DashbordLayouts>
      <AddNewStudentForm />
    </DashbordLayouts>
  );
}
