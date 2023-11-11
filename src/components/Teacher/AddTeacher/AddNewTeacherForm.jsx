import routes from "@/const/routes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import "./TeacherStyle.css"
import { addNewTeacher } from "@/store/actions/teachers.action";
export default function AddNewTeacherForm() {
  const [name, setName] = useState("");
  const [jop, setJop] = useState("");
  const [info, setInfo] = useState("");
  const [facebook, setFacebook] = useState("");
  const [insta, setInsta] = useState("");
  const [x, setX] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleSubmit = () => {
    dispatch(
      addNewTeacher({
        name,
        info,
        img:image,
        jop,
        facebook,
        insta,
        x,


      })
    ).then(res => {
        if(res.payload.id){
            router.push(routes.getteacher)
        }
    });
  };
  return (
    <div className="my-5" >
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Title</Form.Label>
         <Form.Control  onChange={(e) => setName(e.target.value)} type="text" />
       </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">jop</Form.Label>
         <Form.Control  onChange={(e) => setJop(e.target.value)} type="text" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">INFO</Form.Label>
         <Form.Control
           onChange={(e) => setInfo(e.target.value)}
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
         <Form.Label className="input-lable">FACEBOOK</Form.Label>
         <Form.Control onChange={(e) => setFacebook(e.target.value)} type="text" />
       </Form.Group>
       </Col>
       <Col md={6} sm={6} lg={4}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">INSTA</Form.Label>
         <Form.Control
           onChange={(e) => setInsta(e.target.value)}
         
          
         />
       </Form.Group>
       </Col>
       <Col md={6} sm={6} lg={4}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Price</Form.Label>
         <Form.Control onChange={(e) => setX(e.target.value)}   />
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
