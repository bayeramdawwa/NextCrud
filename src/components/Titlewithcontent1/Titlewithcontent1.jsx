import React from 'react'
import "./Titlewithcontent1Style.css"
import { FaCheck } from "react-icons/fa";
import Nums from '@/components/Nums/Nums';
import Button from '@/components/button/Button';
export default function Titlewithcontent1(props) {
  return (
   <>
   <h1 className="title"data-aos="fade-right">
     {props.title}
   </h1>
   <p className="desc"data-aos="fade-left">
    {props.desc}
   </p>

   <div className="existing" data-aos="fade-right">
    <p className='enumeration'> <FaCheck /> {props.enumeration1}</p>
    <p className='enumeration'> <FaCheck /> {props.enumeration2}</p>
    <p className='enumeration'> <FaCheck /> {props.enumeration3}</p>
   </div>
   <Nums 
    num1={props.num1}
    Nconten1={props.Nconten1}
    num2={props.num2}
    Nconten2={props.Nconten2}
    num3={props.num3}
    Nconten3={props.Nconten3}
   />
   <div className="buttons" data-aos="fade-right">
   <Button
   BtnName={props.BtnName}
   />
   <Button
   BtnName={props.BtnName1}
   />
   </div>
 
   </>
  )
}
