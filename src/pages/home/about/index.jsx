import Hero from '@/components/hero/hero'
import hero1 from "@/assets/imges/hero1.jpg"
import LEARN1 from "@/assets/imges/LEARN1.jpg"
import LEARN2 from "@/assets/imges/LEARN2.jpg"
import  {BsCalculator, BsMusicNoteBeamed ,BsBook } from "react-icons/bs"
import  {FaReadme , FaHistory} from "react-icons/fa"
import Titlewithcontent1 from '@/components/Titlewithcontent1/Titlewithcontent1'
import Link from 'next/link';
import "./aboutStyle.css"
import SectionTop from '@/components/SectionTop/SectionTop'
import TeamCard from '@/components/TeamCardAbout/TeamCardAbout'
import EducationCard from '@/components/EducationCard/EducationCard'
import ChooseUs from '@/components/ChooseUs/ChooseUs'
import MainLayouts from '@/layouts/MainLayouts'
export default function index() {
  return (
       <MainLayouts>
    <Hero
    heroimg={LEARN2.src}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="About Us"
    heroa="EXPLORE COURSES"
    />


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
      <section className="team">
      <SectionTop 
        sectitlle= "Our Team"
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
        />
        <div className="teamcard-container">
            <TeamCard />
        </div>
        <p className="viewMC" ><Link href={"/teacher"} className='link'>Browse all</Link></p>
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

      <section className='chooseUs'>
        <ChooseUs 
        mainIMG={LEARN1.src}
        title="Why Choose Us"
        desc="Far far away, behind the word mountains, far from countries vokalia and consonantia ,"
        good="Good Teacher and Staffs "
        img2={hero1.src}
        desc2="Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts"
        adv1="We Value Good Characters"
        adv2="Your Children Are Safe"
        
        />
      </section>

    
    
      </MainLayouts>
  )
}
