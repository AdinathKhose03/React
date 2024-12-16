import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [prob, setProb] = useState([])
    function updateTitle(){
      return setProb(Math.ceil(Math.random()*100))
    }

    const [name, changeName] = useState("Adinath")
    function changeTitle(){
      changeName(Math.ceil(Math.random()*100))
    }

  return (
    <>

      <button onClick={changeTitle}>Change Title</button>
      <Footer name={name}></Footer>

      <hr />

      <button onClick={updateTitle}>Check Probability</button>      
      <Header prob={prob}></Header>

      
    </>
  )
}


function Footer({name}){
  return (
    <div style={{
      padding:"10px",
      fontFamily:"serif"
    }}>
      <h2>{`My name is ${name}%`}</h2>
    </div>
  )
}


function Header({prob}){
  return <div style={{
    margin : "10px",
    padding:"10px",
    fontFamily:"serif"
  }}>
    <h2>{`Probability of getting S is ${prob}%`}</h2>
  </div>
}


export default App
