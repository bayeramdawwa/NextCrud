
import "./NumsStyle.css"
export default function Nums(props) {
  return (
    <div className='Nums' >
        <p className='num'><span>{props.num1}</span>{props.Nconten1}</p>
        <p className='num'><span>{props.num2}</span>{props.Nconten2}</p>
        <p className='num'><span>{props.num3}</span>{props.Nconten3}</p>
     
    </div>
  )
}
