
import "./CourseCardStyle.css"
import {BsBook} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import { get } from "@/store/actions/coursers.action";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
export default function CourseCard(props) {
    const dispatch = useDispatch();
    console.log(dispatch);
    const courses = useSelector((state) => state.courses.data);
    useEffect(() => {
      dispatch(get());
    }, []);

  return (
    <>
    {courses?.slice(-3).map((i , index)=>[

        <div className='CourseCard'>
        <div className="cardIMG">
            <img src={i.img} alt="" />
        </div>
        <div className="cardcontent">
        <div className="cardContentHead">
            <p className="lessonNum"><BsBook /> {i.numL} Lesson</p>
            <p className="Rate"><AiFillStar/> {i.star}</p>
        </div>
        <div className="cardinfo">
            <h3 className="title">{i.title}</h3>
            <p className="desc">{i.desc}</p>
        </div>
        <div className="cardContentend">
            <p className="price">$ {i.price}</p>
            <a className="more"> Learn More</a>
        </div>
        </div>
    </div>

         
    ])}
   </> 
  )

}
