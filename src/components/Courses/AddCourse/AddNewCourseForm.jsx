import routes from "@/const/routes";
import { addNewCourse } from "@/store/actions/coursers.action";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import "./CourseStyle.css"
export default function AddNewCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numL, setNumL] = useState("");
  const [star, setstar] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleSubmit = () => {
    dispatch(
      addNewCourse({
        title,
        desc:description,
        img:image,
        numL,
        star,
        price


      })
    ).then(res => {
        if(res.payload.id){
            router.push(routes.getcourse)
        }
    });
  };
  return (
    <div className="my-5" >
      
   <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Title</Form.Label>
        <Form.Control  onChange={(e) => setTitle(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">description</Form.Label>
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          as="textarea"
          rows ={5}
          
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
        <Form.Control onChange={(e) => setstar(e.target.value)} type="text" />
      </Form.Group>
      </Col>
      <Col md={6} sm={6} lg={4}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Lesson Number</Form.Label>
        <Form.Control
          onChange={(e) => setNumL(e.target.value)}
         type="number"
        
        />
      </Form.Group>
      </Col>
      <Col md={6} sm={6} lg={4}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Price</Form.Label>
        <Form.Control onChange={(e) => setPrice(e.target.value)} type="number"  />
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
