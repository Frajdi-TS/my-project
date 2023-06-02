import './card.css'
import CardTitle from './components/CardTitle'
import UserName from './components/UserName'
import Email from './components/Email'
import {Age} from './components/Age'

const Card = ({cardData}) => {
  const {cardTitle, userName, email, age, skills} = cardData

  return (
    <div className='card'>
    <CardTitle title={cardTitle.text} titleColor={cardTitle.color}/>
    <UserName  text={userName.text} name={userName.name}/>
    <Email text={email.text} email={email.email}/>
    <Age text={age.text} age={age.age}/>
    <ul>
      {skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
</div>
  )
}   

export default Card