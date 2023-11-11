
import "./EducationCardStyle.css"
export default function EducationCard(props) {
  return (
    <div className='EducationCard'>
        <div className="cardIMG">
            {props.icion}
        </div>
        <h3 className="title">{props.title}</h3>
        <p className="desc">{props.desc}</p>
    </div>
  )
}
