
import "./SchoolNewsCardStyle.css"
import {BsCalendar3 , BsFillPersonFill} from "react-icons/bs"
export default function (props) {
  return (
    <div className='SchoolNewsCard' data-aos="fade-right">
        <div className='cardIMG'>
        <img src={props.imgcard} alt="" className="cardimg" />
        </div>
   
    <div className="cardContent">
         <h3 className="title">{props.title}</h3>
         <div className="info">
            <p className="p-info"><BsCalendar3/>{props.Calendar}</p>
            <p className="p-info"><BsFillPersonFill />{props.person}</p>
         </div>
         <p className="desc">{props.desc}</p>
         <a href="" className="learn">Learn More</a>
    </div>
    </div>
  )
}
