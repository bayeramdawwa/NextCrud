import routes from "@/const/routes";
import {
  addNewCourse,
  editCourse,
  getById,
} from "@/store/actions/coursers.action";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button,  Card,  Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "./CourseStyle.css"
export default function EditCourseForm() {


  const course = useSelector((state) => state.courses.courseById);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numL, setNumL] = useState("");
  const [star, setstar] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(`${course.img}`);
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };
  console.log(router?.query?.id && !course?.id);
  useEffect(() => {
    if (router?.query?.id && !course?.id) {
      dispatch(getById(router?.query?.id)).then((res) => {
        setTitle(res.payload?.title);
        setDescription(res.payload?.desc);
        setNumL(res.payload?.numL);
        setPrice(res.payload?.price);
        setstar(res.payload?.star);
      });
    } else {
      setTitle(course?.title);
      setDescription(course?.desc);
      setNumL(course?.numL);
      setPrice(course?.price);
      setstar(course?.star);
    }
  }, [router]);

  const handleSubmit = () => {
    dispatch(
      editCourse({
        id: router?.query?.id,
        title,
        desc:description,
        img:image,
        numL,
        star,
        price
      })
    ).then((res) => {
      router.push(routes.getcourse);
    });
  };
  return (
    <div className="my-5" >
      
   <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Title</Form.Label>
        <Form.Control defaultValue={course.title} onChange={(e) => setTitle(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">description</Form.Label>
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          as="textarea"
          rows ={5}
          defaultValue={course.desc}
        />
      </Form.Group>
      <img class="prev-img" src={image}/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Image</Form.Label>
        <Form.Control
          onChange={(e) => handleUploadImage(e.target.files[0])}
          type="file"
          
        />
       
      </Form.Group>
      <Row >
        <Col md={6} sm={6} lg={4}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Rate</Form.Label>
        <Form.Control onChange={(e) => setstar(e.target.value)} type="text" defaultValue={course.star}/>
      </Form.Group>
      </Col>
      <Col md={6} sm={6} lg={4}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Lesson Number</Form.Label>
        <Form.Control
          onChange={(e) => setNumL(e.target.value)}
         type="number"
         defaultValue={course.numL}
        />
      </Form.Group>
      </Col>
      <Col md={6} sm={6} lg={4}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Price</Form.Label>
        <Form.Control onChange={(e) => setPrice(e.target.value)} type="number" defaultValue={course.price} />
      </Form.Group>
      </Col>
      </Row>
      <div className="d-flex justify-content-center mt-5">
        <Button className="w-25 sub-btn"
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
