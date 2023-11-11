import Hero from '@/components/hero/hero'
import MainLayouts from '@/layouts/MainLayouts'
import hero1 from "@/assets/imges/hero1.jpg"
import SectionTop from '@/components/SectionTop/SectionTop'
import "./courseStyle.css"
import Link from 'next/link';
import CourseCard from '@/components/coursesCard/CourseCard'


export default function index() {


  return (

    <MainLayouts>
      
      <Hero
    heroimg={hero1.src}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="Our Courses"
    
    />

    
      <section className="courses">
      <SectionTop 
        sectitlle= "The Right Course For You "
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
        />

        <div className="CourseCard-container" data-aos="fade-right">
           <CourseCard />
        </div>
      
      </section>
      
    </MainLayouts>
  )
}
