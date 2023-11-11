import routes from "@/const/routes";
import {
  editStudent,
  getById,
} from "@/store/actions/students.action";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button,  Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "./StudentStyle.css"
export default function EditStudentForm() {

  const student = useSelector((state) => state.students.studentById);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [insta, setInsta] = useState("");
  const [x, setX] = useState("");
  const [image, setImage] = useState(`${student.img}`);
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };
  console.log(router?.query?.id && !student?.id);
  useEffect(() => {
    if (router?.query?.id && !student?.id) {
      dispatch(getById(router?.query?.id)).then((res) => {
        setName(res.payload?.name);
        setAge(res.payload?.age);
        setEmail(res.payload?.email);
        setPhone(res.payload?.phone);
        setAddress(res.payload?.address);
        setFacebook(res.payload?.facebook);
        setInsta(res.payload?.insta);
        setX(res.payload?.x);
      });
    } else {
      setName(student?.name);
      setAge(student?.age);
      setEmail(student?.email);
      setPhone(student?.phone);
      setAddress(student?.address);
      setFacebook(student?.facebook);
      setInsta(student?.insta);
      setX(student?.x);
    }
  }, [router]);

  const handleSubmit = () => {
    dispatch(
      editStudent({
        id: router?.query?.id,
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
    ).then((res) => {
      router.push(routes.getstudent);
    });
  };
  return (
    <div className="my-5" >
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">name</Form.Label>
         <Form.Control  onChange={(e) => setName(e.target.value)} type="text" defaultValue={student.name} />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Address</Form.Label>
         <Form.Control
           onChange={(e) => setAddress(e.target.value)}
           type="text"
           defaultValue={student.address}
         
         />
            </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Email</Form.Label>
         <Form.Control
           onChange={(e) => setEmail(e.target.value)}
           type="text"
           defaultValue={student.email}
         />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">Phone</Form.Label>
         <Form.Control
           onChange={(e) => setPhone(e.target.value)}
           type="tel"
           defaultValue={student.phone}
         
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
         <Form.Control onChange={(e) => setFacebook(e.target.value)} type="text" defaultValue={student.facebook} />
       </Form.Group>
       </Col>
       <Col md={6} sm={6} lg={3}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">INSTA</Form.Label>
         <Form.Control
           onChange={(e) => setInsta(e.target.value)}
           defaultValue={student.insta}
          
         />
         
       </Form.Group>
       </Col>
       <Col md={6} sm={6} lg={3}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">X</Form.Label>
         <Form.Control onChange={(e) => setX(e.target.value)} defaultValue={student.x}  />
       </Form.Group>
       </Col>
   
       <Col md={6} sm={6} lg={3}  >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="input-lable">age</Form.Label>
         <Form.Control  onChange={(e) => setAge(e.target.value)} type="number" defaultValue={student.age} />
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
