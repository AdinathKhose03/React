import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title={"Adiant1"}></Header>
      <Header title={"Adiant1"}></Header>
      <Header title={"Adiant1"}></Header>
      <Header title={"Adiant1"}></Header>
    </div>
  )
}



function HeaderWithButton(){
  const [title, setTitle] = useState("Adinath1")

  function updateTitle(){
    setTitle(`My name is: ${Math.floor(Math.random()*100)}`)
  }

  return <div>
      <button onClick={updateTitle}>Click Here</button>
      <Header title= {title}></Header>
  </div>
}

function Header({title}){
  console.log("Component rerender")
  return (
    <div>
      {title}
    </div>
  )
}

export default App
