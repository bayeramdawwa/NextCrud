import routes from "@/const/routes";
import {
  editTeacher,
  getById,
} from "@/store/actions/teachers.action";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button,  Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "./TeacherStyle.css"
export default function EditTeacherForm() {

  const teacher = useSelector((state) => state.teachers.teacherById);
  const [name, setName] = useState("");
  const [jop, setJop] = useState("");
  const [info, setInfo] = useState("");
  const [facebook, setFacebook] = useState("");
  const [insta, setInsta] = useState("");
  const [x, setX] = useState("");
  const [image, setImage] = useState(`${teacher.img}`);
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };
  console.log(router?.query?.id && !teacher?.id);
  useEffect(() => {
    if (router?.query?.id && !teacher?.id) {
      dispatch(getById(router?.query?.id)).then((res) => {
        setName(res.payload?.name);
        setJop(res.payload?.jop);
        setInfo(res.payload?.info);
        setFacebook(res.payload?.facebook);
        setInsta(res.payload?.insta);
        setX(res.payload?.x);
      });
    } else {
      setName(teacher?.name);
      setJop(teacher?.jop);
      setInfo(teacher?.info);
      setFacebook(teacher?.facebook);
      setInsta(teacher?.insta);
      setX(teacher?.x);
    }
  }, [router]);

  const handleSubmit = () => {
    dispatch(
      editTeacher({
        id: router?.query?.id,
        name,
        info,
        jop,
        img:image,
        facebook,
        insta,
        x
      })
    ).then((res) => {
      router.push(routes.getteacher);
    });
  };
  return (
    <div className="my-5" >
      
   <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">NAME</Form.Label>
        <Form.Control defaultValue={teacher.name} onChange={(e) => setName(e.target.value)} type="text" />
      </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">JOP</Form.Label>
        <Form.Control defaultValue={teacher.jop} onChange={(e) => setJop(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">INFO</Form.Label>
        <Form.Control
          onChange={(e) => setInfo(e.target.value)}
          type="text"
          as="textarea"
          rows ={5}
          defaultValue={teacher.info}
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
        <Form.Label className="input-lable">Facebook</Form.Label>
        <Form.Control onChange={(e) => setFacebook(e.target.value)} type="text" defaultValue={teacher.facebook}/>
      </Form.Group>
      </Col>
      <Col md={6} sm={6} lg={4}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">Insta</Form.Label>
        <Form.Control
          onChange={(e) => setInsta(e.target.value)}
         defaultValue={teacher.insta}
        />
      </Form.Group>
      </Col>
      <Col md={6} sm={6} lg={4}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-lable">X</Form.Label>
        <Form.Control onChange={(e) => setX(e.target.value)}  defaultValue={teacher.x} />
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
