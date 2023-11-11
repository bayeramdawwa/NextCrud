
import SectionTop from '@/components/SectionTop/SectionTop'
import {FaMinus , FaPlus} from "react-icons/fa"
import "./ChooseUsStyle.css"

export default function (props) {
  return (
    <div className='ChooseUs'>
        <div className="img" data-aos="fade-right">
            <img src={props.mainIMG} alt="" />
        </div>
        <div className="CONTENT">
            <SectionTop 
            sectitlle={props.title}
            secdesc={props.desc}
            
            />
            <p className="good" data-aos="fade-right">
               <FaMinus /> {props.good}
            </p>

            <div className="imgdesc" data-aos="fade-left">
                <img src={props.img2} alt="" />
                <p className="desc">{props.desc2}</p>
            </div>
            <p className="advantages"data-aos="fade-left"><FaPlus />{props.adv1}</p>
            <p className="advantages"data-aos="fade-left"><FaPlus />{props.adv2}</p>
        </div>
    </div>
  )
}
