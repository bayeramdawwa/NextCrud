import { getById } from "@/store/actions/teachers.action";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col } from "react-bootstrap";
import routes from "@/const/routes";

export default function TeacherById() {
  const router = useRouter();
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teacherById);
  useEffect(() => {
    if (router?.query?.id) {
      dispatch(getById(router?.query?.id));
    }
  }, [router]);

  return (
    <div>
      <Col md={6} sm={12} lg={12} className="mt-5 w-50">
        <Card>
          {/* <Card.Img variant="top" src={course.image} /> */}
          <Card.Body>
            {/* <Card.Img src={course.img}></Card.Img>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>{course.desc}</Card.Text>
            <Card.Text>Lesson Number: {course.numL}</Card.Text>
            <Card.Text>Price: {course.price}</Card.Text>
            <Card.Text>Rate: {course.star}</Card.Text> */}
            <div class="d-grid gap-2">
              <Button
                variant="primary"
                onClick={() => {
                  router.push(routes.editteacher(teachers.id));
                }}
              >
                Edit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
