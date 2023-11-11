
import CourseCard from "@/components/Courses/CourseCard/CourseCard";
import routes from "@/const/routes";
import DashbordLayouts from "@/layouts/DashbordLayouts";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import "./Styles/CoursesStyle.css"

export default function index() {
  const router = useRouter();

  return (
    <DashbordLayouts>
      <div className="d-grid ">
      
      </div>
      <CourseCard />

      <div className="d-flex justify-content-center">
      <Button
          variant="primary"
          className="mt-5 btn w-25 add-btn" 
          onClick={() => router.push(routes.addcourse)}
        >
          Add new cousrse
        </Button>
      </div>
    </DashbordLayouts>
  );
}
