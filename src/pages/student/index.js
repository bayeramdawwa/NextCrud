
import Hero from "@/components/hero/hero";
import "./StudentStyles.css"
import LEARN2 from "@/assets/imges/LEARN2.jpg"

import StudentCard from '@/Components/StudentCard/StudentCard';
import MainLayouts from "@/layouts/MainLayouts";


export default function index() {
 

  return (
       <MainLayouts>
    <Hero
    heroimg={LEARN2.src}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="Our Student"
  
    />

      <section className="team">
     
        <div className="teamcard-container">
       
        <StudentCard />
          
        </div>
      
</section>
    
    
    </MainLayouts>
  )
}
