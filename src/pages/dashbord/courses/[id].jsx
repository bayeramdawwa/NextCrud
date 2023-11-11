import CourseById from "@/components/Courses/CourseById/CourseById";
import DashbordLayouts from "@/layouts/DashbordLayouts";
import React from "react";

export default function index() {
  return (
    <DashbordLayouts>
      <CourseById />
    </DashbordLayouts>
  );
}
