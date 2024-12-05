import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  let [counter, setCount] = useState(0);
  
  function AddValue(){
    if(counter<20){
      setCount(counter + 1)
    }
  }

  function MinusValue(){
    if(counter > 0){
      setCount(counter - 1)
    }
  }

  return (
    <>
      <h1>Welcome to counter App</h1>
      <h2>Value:{counter}</h2>
      <button onClick={AddValue} style={{margin:'10px'}}>Add value</button>
      <button onClick={MinusValue} style={{margin:'10px'}}>Minus value</button>
      <p>Thus, we have changed the value of counter to {counter} using react hooks</p>
    </>
  )
}



export default App
