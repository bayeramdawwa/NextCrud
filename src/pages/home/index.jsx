import Hero from '@/components/hero/hero'
import MainLayouts from '@/layouts/MainLayouts'
import  {GiMaterialsScience} from "react-icons/gi"
import  {MdOutlineBusinessCenter} from "react-icons/md"
import  {BiSolidPencil} from "react-icons/bi"
import  {BsCalculator, BsMusicNoteBeamed ,BsBook } from "react-icons/bs"
import  {FaRegChartBar , FaReadme , FaHistory} from "react-icons/fa"
import  {MdPhotoCamera , MdAnimation} from "react-icons/md"
import React from 'react'
import hero1 from "@/assets/imges/hero1.jpg"
import LEARN1 from "@/assets/imges/LEARN1.jpg"
import SectionTop from '@/components/SectionTop/SectionTop'
import Category from '@/components/category/Category'
import "./homeStyle.css"
import Link from 'next/link';
import Titlewithcontent1 from '@/components/Titlewithcontent1/Titlewithcontent1'
import EducationCard from '@/components/EducationCard/EducationCard'
import CourseCard from '@/components/CourseCardHome/CourseCard'
import SchoolNewsCard from '@/components/SchoolNewsCard/SchoolNewsCard'
import PricingCard from '@/components/PricingCard/PricingCard'
import Carousol from '@/components/Carousol/Carousol'
import ChooseUs from '@/components/ChooseUs/ChooseUs'

export default function index() {


  return (

    <MainLayouts>
      
        <Hero
    heroimg={hero1.src}
    herop="WATCH THE VIDEO"
    heroh1="Education is the Mother of Leadership"
    heroa="EXPLORE COURSES"
    />

    <div className='category'>
      <SectionTop  
        sectitlle= "Browes Top Category"
        />

      
        < div className="categorys-container"> 
        <Category
           icion= {<GiMaterialsScience />}
           title= "Science"
           num={1391}
           type="Courses"
           />
           <Category
           icion= {<MdOutlineBusinessCenter />}
           title= "Busines"
           num={591}
           type="Courses"
           />
           <Category
           icion= {< BsCalculator/>}
           title= "Accounting"
           num={1391}
           type="Courses"
           />
           <Category
           icion= {<BiSolidPencil />}
           title= "design"
           num={1391}
           type="Courses"
           />

           <Category
           icion= {<BsMusicNoteBeamed />}
           title= "Music"
           num={1391}
           type="Courses"
           />
           <Category
           icion= {<FaRegChartBar/>}
           title= "Marketing"
           num={1391}
           type="Courses"
           />
           <Category
           icion= {<MdPhotoCamera />}
           title= "Photography"
           num={1391}
           type="Courses"
           />
           <Category
           icion= {<MdAnimation />}
           title= "Animation"
           num={1701}
           type="Courses"
           />
       
        </div>
        <p className="viewMC" >We have More category, 
        <Link href={"./home"} className='link'>Browse all</Link></p>
        </div>
        <section className="instructor" >
        <div className="content" >
      <Titlewithcontent1 
        title= "Become an  Instructor"
        desc= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. Sequi, quo enim vitae corporis maiores ut aperiam mollitia assumenda animi possimus rem dolorem."
        enumeration1="spareated the life"
        enumeration2="spareated the life"
        enumeration3="spareated the life"
        BtnName="Get Started"
      />
      </div>
      <div className="sectionIMG" data-aos="fade-left" >
        <img  src={LEARN1.src} alt="" />
      </div>
      </section>
      <section className="education">
      <SectionTop 
        sectitlle= "We have best education"
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
        />
         <div className="educationCard-container" data-aos="fade-right" >
          <EducationCard 
          icion ={<BsMusicNoteBeamed />}
          title= "Music Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<BsCalculator/>}
          title= "Math Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<BsBook />}
          title= "English Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<FaReadme/>}
          title= "Reading Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<FaHistory/>}
          title= "History Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<BsMusicNoteBeamed />}
          title= "Music "
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
         </div>
      </section>
      <section className="courses">
      <SectionTop 
        sectitlle= "The Right Course For You "
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
        />

        <div className="CourseCard-container" data-aos="fade-right">
       
   <CourseCard />
        </div>
        <p className="viewMC" ><Link href={"/home/courses"} className='link'>Browse all</Link></p>
      </section>
      <section className="leaders">
      <Hero
    heroimg={hero1.src}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    heroh1="Education for tomowrrow's leader"
    heroa="ENROLL NOW"
    />
      </section>
      <section className="aboutus">
      
      <div className="content">
    <Titlewithcontent1 
      title= "About US"
      desc= "Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts"
      enumeration1="spareated the life"
      enumeration2="spareated the life"
      enumeration3="spareated the life"
      num1="204 +"
      num2="0"
      num3="0"
      Nconten1="No. Students"
      Nconten2="No. Teachers"
      Nconten3="No. Awards"
      BtnName="ADMISSION"
      BtnName1="LEARN MORE"
    />
    </div>
    <div className="sectionIMG" data-aos="fade-left">
      <img src={LEARN1.src} alt="" />
    </div>
    </section>
    <section className="schoolNews">
      <SectionTop 
        sectitlle= "School News "
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
       
        />
         <div className="SchoolNewsCard-container">
          <SchoolNewsCard 
          imgcard ={LEARN1.src}
          title = "Education for tomowrrow's leader"
          Calendar= "mars 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          />
          <SchoolNewsCard 
          imgcard ={LEARN1.src}
          title = "Enroll Your Kids This Summer to get 30% off"
          Calendar= "jun 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          />
         </div>
      </section>
      <section className="pricing">
      <SectionTop 
        sectitlle= "Pricing "
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
       
        />
        <div className="pricingCard-container" data-aos="fade-left">
        <PricingCard 
        title ="Starter"
        price={300}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente,"
        />
        <PricingCard 
        title ="Business"
        price={99.99}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente,"
        />
        <PricingCard
        title ="Premium"
        price={199.99}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente,"
        />
        </div>
        </section>
          <section className="testimonials">
        <Carousol
      content1 = "Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts"
      personIMG1={LEARN1.src}
      name1="bayeram"
      jop1="it eng"
      content2 = " there live the blind texts Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts"
      personIMG2={hero1.src}
      name2="ali"
      jop2="CEO"
      content3 = "Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts"
      personIMG3={hero1.src}
      name3="IBRAHIM"
      jop3="FOUNDER"
       />
      </section>
      <section className='chooseUs'>
        <ChooseUs
        mainIMG={LEARN1.src}
        title="Why Choose Us"
        desc="Far far away, behind the word mountains, far from countries vokalia and consonantia ,"
        good="Good Teacher and Staffs "
        img2={hero1.src}
        desc2="Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts "
        adv1="We Value Good Characters"
        adv2="Your Children Are Safe"
        
        />
      </section>
    </MainLayouts>
  )
}
