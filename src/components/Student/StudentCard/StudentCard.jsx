import React from 'react'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, get } from "@/store/actions/students.action";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import "./StudentCardStyle.css"
import routes from "@/const/routes";
export default function StudentCard() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.data);
  console.log(students);
  const router = useRouter();
  useEffect(() => {
    dispatch(get());
  }, []);
  const handleSubmit = (id) => {
    console.log(id);
    dispatch(
      deleteStudent({
        id: id,

      })
    ).then((res) => {
      dispatch(get());
    });
  };
  return (
    <>
      <Row justify-content-center>
        {students?.map((item, index) => {
          return (
            <Col md={6} sm={12} lg={3} key={index} className="mt-5 d-flex justify-content-center">
              <div className='StudentCard' data-aos="fade-right">
                <div className="cardIMG" >
                  <img src={item.img} alt="" />

                </div>
                <p className="detail">Name: <span>{item.name}</span></p>
                <p className="detail" >Age: <span>{item.age} </span></p>
                <p className="detail">Address: <span>{item.address}</span></p>
                <p className="detail">Phone: <span>{item.phone}</span></p>
                <p className="detail">Email: <span>{item.email}</span></p>
                <div className="social">
                 <a className='socail' href={item.facebook}> <FaFacebookF /></a>
                 <a className='socail' href={item.insta}> <FaTwitter /></a>
                 <a className='socail' href={item.x}> <FaLinkedinIn /></a>
                </div>
            
              
              <a className="more"
                onClick={() => {
                  router.push(routes.getByIdstudent(item.id));
                }}
              >Update</a>

              <a className="delete"
                onClick={(e) => {

                  handleSubmit(item.id);
                }}>Delete</a>
           
              </div>
           </Col >
  )})}


      </Row >
      </>
  )
              }