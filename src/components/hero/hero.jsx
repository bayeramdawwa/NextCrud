

import "bootstrap/dist/css/bootstrap.min.css"
import "./heroStyle.css";

export default function Hero(props) {

       return (

              <div className='HERO'>
                     <img src={props.heroimg} alt="" className="heroIMG" />
                     <div className="content"   >
                            <p className="heroP" >{props.herop}</p>
                            <h1 className="heroH1">{props.heroh1}</h1>
                            <p className="heroP">{props.herop1}</p>
                            <a href="#" className="heroLink" >{props.heroa}</a>
                     </div>
              </div>
       )
}
