
import { useDispatch, useSelector } from "react-redux";
import "./TeamCardStyle.css"
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import { get } from "@/store/actions/teachers.action";
import { useEffect } from "react";
import Link from "next/link";

export default function TeamCard() {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.data);
  useEffect(() => {
    dispatch(get());
  }, []);

  return (
 <>       
  {teachers?.slice(-3).map((i , index)=>[

<div className='TeamCard' data-aos="fade-right">
<div className="cardIMG" >
    <img src={i.img}  />
    
</div>
<p className="name">{i.name}</p>
    <p className="jop" >{i.jop}</p>
    <p className="info">{i.info}</p>
    <div className="social">
    <a className='socail' href={i.facebook}> <FaFacebookF/></a>
       <a className='socail' href={i.insta}> <FaTwitter/></a>
       <a className='socail' href={i.x}> <FaLinkedinIn/></a>
    </div>
</div>
 ])}
 </>
   
  )
}
