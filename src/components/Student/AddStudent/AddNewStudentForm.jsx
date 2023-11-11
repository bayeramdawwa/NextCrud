import routes from "@/const/routes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import "./StudentStyle.css"
import { addNewStudent } from "@/store/actions/students.action";
export default function AddNewStudentForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
      addNewStudent({
        name,
        age,
        img:image,
        address,
        phone,
        email,
        facebook,
        insta,
        x,


      })
    ).then(res => {
        if(res.payload.id){
            router.push(routes.getstudent)
        }
    });
  };
  return (
    <div className="my-5" >
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">name</Form.Label>
         <Form.Control  onChange={(e) => setName(e.target.value)} type="text" />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Address</Form.Label>
         <Form.Control
           onChange={(e) => setAddress(e.target.value)}
           type="text"
         
         />
            </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Email</Form.Label>
         <Form.Control
           onChange={(e) => setEmail(e.target.value)}
           type="text"
         
         />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Phone</Form.Label>
         <Form.Control
           onChange={(e) => setPhone(e.target.value)}
           type="tel"
         
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
         <Col md={6} sm={6} lg={3}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">FACEBOOK</Form.Label>
         <Form.Control onChange={(e) => setFacebook(e.target.value)} type="text" />
       </Form.Group>
       </Col>
       <Col md={6} sm={6} lg={3}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">INSTA</Form.Label>
         <Form.Control
           onChange={(e) => setInsta(e.target.value)}
         
          
         />
         
       </Form.Group>
       </Col>
       <Col md={6} sm={6} lg={3}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">X</Form.Label>
         <Form.Control onChange={(e) => setX(e.target.value)}   />
       </Form.Group>
       </Col>
   
       <Col md={6} sm={6} lg={3}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">age</Form.Label>
         <Form.Control  onChange={(e) => setAge(e.target.value)} type="number" />
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
