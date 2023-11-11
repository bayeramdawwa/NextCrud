
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./CarousolStyle.css"


// import required modules
import { Autoplay,Pagination } from 'swiper/modules';
import SectionTop from '@/components/SectionTop/SectionTop'

export default function Carousol(props) {
  return (
    <>
      <Swiper 
      pagination={true} 
      modules={[Autoplay,Pagination]}
      
      loop={Infinity}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
         className="mySwiper" data-aos="fade-right">
        <SwiperSlide>
          <SectionTop
            sectitlle="testimonials"
            secdesc={props.content1}


          />
          <div className="img">
            <img src={props.personIMG1} alt="" className="prsonIMG" />
          </div>

          <p className="name">{props.name1}</p>

          <p className="jop">{props.jop1}</p>


        </SwiperSlide>
        <SwiperSlide>
          <SectionTop
            sectitlle="testimonials"
            secdesc={props.content2}


          />
          <div className="img">
            <img src={props.personIMG2} alt="" className="prsonIMG" />
          </div>

          <p className="name">{props.name2}</p>

          <p className="jop">{props.jop2}</p>


        </SwiperSlide>
        <SwiperSlide>
          <SectionTop
            sectitlle="testimonials"
            secdesc={props.content3}


          />
          <div className="img">
            <img src={props.personIMG3} alt="" className="prsonIMG" />
          </div>

          <p className="name">{props.name3}</p>

          <p className="jop">{props.jop3}</p>


        </SwiperSlide>


      </Swiper>
    </>
  );
}
