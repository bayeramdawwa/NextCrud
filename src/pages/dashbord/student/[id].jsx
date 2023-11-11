
import StudentById from "@/components/Student/StudentById/StudentById";
import DashbordLayouts from "@/layouts/DashbordLayouts";
import React from "react";

export default function index() {
  return (
    <DashbordLayouts>
      <StudentById />
    </DashbordLayouts>
  );
}
