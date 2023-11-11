
import "./PricingCard.css"
import Button from '@/components/button/Button'
export default function PricingCard(props) {
  return (
    <div className='PricingCard'>
      <h3 className="title">{props.title}</h3>
      <p className="price"><span>{props.price}$</span>/month</p>
      <p className="desc">{props.desc}</p>
      <Button 
       BtnName="Get Started"
      />
    </div>
  )
 
}
