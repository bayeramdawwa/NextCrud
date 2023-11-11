
import { get } from "@/store/actions/students.action";
import "./StudentCardStyle.css"
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import Link from "next/link";
export default function index() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.data);


  useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <>
{    students.map((i , index)=>[

      <div className='StudentCard' data-aos="fade-right">
      <div className="cardIMG" >
          <img src={i.img} alt="" />
          
      </div>
      <p className="detail">Name: <span>{i.name}</span></p>
          <p className="detail" >Age: <span>{i.age} </span></p>
          <p className="detail">Address: <span>{i.address}</span></p>
          <p className="detail">Phone: <span>{i.phone}</span></p>
          <p className="detail">Email: <span>{i.email}</span></p>
          <div className="social">
         {i.facebook && <Link className='socail' href={i.facebook}> <FaFacebookF/></Link>}
        { i.insta && <Link className='socail' href={i.insta}> <FaTwitter/></Link>}
         {i.x && <Link className='socail' href={i.x}> <FaLinkedinIn/></Link>}
          </div>
          <a href="#" className="showMore">Show More  Info</a>
  </div> 
    ])}
    </>
  )

}
