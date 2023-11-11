
import "./CategoryStyle.css"

export default function Category(props) {
 
  return (
    <>
    <div className='CategoryCard'>
       {props.icion} 
       <div className="catDesc">
        <h3 className="title">{props.title} </h3>
        <p className='catnum'>{props.num} <span>{props.type}</span></p>
       </div>
    </div>
    </>
  )
}
