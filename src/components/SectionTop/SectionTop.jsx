
import "./SectionTopStyle.css"
export default function SectionTop(props) {
  return (
    <>
    <h1 className="sectitlle mt-5" >
        {props.sectitlle}
    </h1>
    <p className="secdesc" >
        {props.secdesc}
    </p>
    </>
  )
}
