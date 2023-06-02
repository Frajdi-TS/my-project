import Card from "./card/Card";



const App = () =>  {

  const data = 
  [
  {
    cardTitle : 
    {
      text: 'User Information',
      color: 'blue'
    },
    userName: 
    {
      text: 'Name :',
      name: 'Frajdi'
    },
    email: {
      text: 'Email : ',
      email: 'frajdimalaj@gmail.com'
    },
    age: {
      text: 'Age :',
      age: 23
    },
    skills: ['html', "css", 'js']
  },
  {
    cardTitle : 
    {
      text: 'User Information',
      color: 'blue'
    },
    userName: 
    {
      text: 'Name :',
      name: 'Frajdi'
    },
    email: {
      text: 'Email : ',
      email: 'frajdimalaj@gmail.com'
    },
    age: {
      text: 'Age :',
      age: 23
    },
    skills: ['html', "css", 'js']
  }
]



  return  data.map((item, index) => {
    return <Card key={index} cardData={item}/>
  })
}

export default App;
