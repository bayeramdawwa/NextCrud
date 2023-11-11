// git
import './styles.css';
import {AiFillFacebook , AiOutlineTwitter , AiOutlineInstagram , AiFillLinkedin} from "react-icons/ai"
import Learn1 from "@/assets/imges/Learn1.jpg"
export default function HomeFooter() {
  return (

   <footer className='footer'>
      <div className="Fmenu1">
        <h3 className="menuh3">About US</h3>
        <p className="Fdesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, eaque. Aliquam quaerat doloribus debitis quam.
        </p>
        <h3 className="menuh3">Contact</h3>
        <div className="Fsoical">
          <a className='FS' href="#"><AiFillFacebook /></a>
          <a className='FS' href="#"><AiOutlineTwitter /></a>
          <a className='FS' href="#"><AiOutlineInstagram /></a>
          <a className='FS' href="#"><AiFillLinkedin /></a>
        </div>
        
      </div>
      <div className="Fmenu2">
      <h3 className="menuh3">Projects</h3>
      <p className="Flink">Wep design</p>
      <p className="Flink">Html 5</p>
      <p className="Flink">CSS 3</p>
      <p className="Flink">JQuery</p>
      <p className="Flink">Bootstrap</p>
      </div>
      <div className="Fmenu3">
      <h3 className="menuh3">Gallery</h3>

      <div className="imgs">
        <img src={Learn1.src} alt="" />
        <img src={Learn1.src} alt="" />
        <img src={Learn1.src} alt="" />
        <img src={Learn1.src} alt="" />
        <img src={Learn1.src} alt="" />
        <img src={Learn1.src} alt="" />
      </div>
      </div>
      <div className="Fmenu4">
      <h3 className="menuh3">contact</h3>
      <p className="Finfo adress">Syria-Tartous</p>
      <p className="Finfo">+10 2233 0343 6</p>
      <p className="Finfo">+10 2233 0343 6</p>
      <p className="Finfo">info@info</p>
      
      </div>
     
   </footer>

  );
}

