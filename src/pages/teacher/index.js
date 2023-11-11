
import Hero from "@/components/hero/hero";
import "./TeacherStyles.css"
import LEARN2 from "@/assets/imges/teachers.png"
import MainLayouts from "@/layouts/MainLayouts";
import TeamCard from "@/components/TeamCard/TeamCard";


export default function index() {
 

  return (
       <MainLayouts>
        <Hero
    heroimg={LEARN2.src}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="Our Team"
  
    />

      <section className="team">
     
        <div className="teamcard-container">
       
        <TeamCard />
          
        </div>
      
</section>
    
    
    </MainLayouts>
  )
}
