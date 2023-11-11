
import "./CourseCardStyle.css"
import {BsBook} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, get } from "@/store/actions/coursers.action";
import  { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Card, Col, Row } from "react-bootstrap";
import routes from "@/const/routes";
export default function CourseCard() {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.data);
    const router = useRouter();
    useEffect(() => {
      dispatch(get());
    }, []);
    const handleSubmit = (id) => {
        console.log(id);
        dispatch(
          deleteCourse({
            id: id,
          
          })
        ).then((res) => {
            dispatch(get());
        });
      };
  return (
    <>
    <Row justify-content-center>
    {courses?.map((item, index) => {
        return (
            <Col md={6} sm={12} lg={3} key={index} className="mt-5">
    <div className='CourseCard' key={index}>
        <div className="cardIMG">
            <img src={item.img} alt="" />
        </div>
        <div className="cardcontent">
        <div className="cardContentHead">
            <p className="lessonNum"><BsBook /> {item.numL} Lesson</p>
            <p className="Rate"><AiFillStar/> {item.star}</p>
        </div>
        <div className="cardinfo">
            <h3 className="title">{item.title}</h3>
            <p className="desc">{item.desc}</p>
        </div>
        <div className="cardContentend">
            <p className="price">$ {item.price}</p>
            <a className="more"
             onClick={() => {
                router.push(routes.getByIdcourse(item.id));
              }}
            >Update</a>
        </div>
        <div className='del'>
        <a className="delete" 
         onClick={(e) => {
           
            handleSubmit(item.id);
          }}>Delete</a>
        </div>
        </div>
    </div>
    </Col>
    );
        })}
        </Row>
        </>
  )
}
