


import routes from "@/const/routes";
import DashbordLayouts from "@/layouts/DashbordLayouts";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import "./Styles/CoursesStyle.css"
import StudentCard from "@/components/Student/StudentCard/StudentCard";

export default function index() {
  const router = useRouter();

  return (
    <DashbordLayouts>
      <div className="d-grid ">
      
      </div>
      <StudentCard />

      <div className="d-flex justify-content-center">
      <Button
          variant="primary"
          className="mt-5 btn w-25 add-btn" 
          onClick={() => router.push(routes.addstudent)}
        >
          Add new Student
        </Button>
      </div>
    </DashbordLayouts>
  );
}
