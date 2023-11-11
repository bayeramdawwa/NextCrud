import React from 'react'

import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { deleteteacher, get } from "@/store/actions/teachers.action";
import  { useEffect } from "react";
import { useRouter } from "next/router";
import {  Col, Row } from "react-bootstrap";
import "./TeamCardStyle.css"
import routes from "@/const/routes";
export default function TeamCard() {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.data);
  console.log(teachers);
  const router = useRouter();
  useEffect(() => {
    dispatch(get());
  }, []);
  const handleSubmit = (id) => {
      console.log(id);
      dispatch(
        deleteteacher({
          id: id,
        
        })
      ).then((res) => {
          dispatch(get());
      });
    };
  return (
    <>
       <Row justify-content-center>
    {teachers?.map((item, index) => {
      return (
        <Col md={6} sm={12} lg={3} key={index} className="mt-5 pt-5 d-flex justify-content-center">
        <div className='TeamCard' >
    <div className="cardIMG" >
        <img src={item.img} alt="" />
        
    </div>
    <p className="name">{item.name}</p>
        <p className="jop" >{item.jop}</p>
        <p className="info">{item.info}</p>
        <div className="social">
       <a className='socail' href={item.facebook}> <FaFacebookF/></a>
       <a className='socail' href={item.insta}> <FaTwitter/></a>
       <a className='socail' href={item.x}> <FaLinkedinIn/></a>
        </div>
        <div className='del'>
        <a className="more"
             onClick={() => {
                router.push(routes.getByIdteacher(item.id));
              }}
            >Update</a>
       
        <a className="delete" 
         onClick={(e) => {
           
            handleSubmit(item.id);
          }}>Delete</a>
        </div>
        
</div>
</Col>
      )})}
      </Row>
      </>
  )
}
