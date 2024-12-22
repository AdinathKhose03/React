import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [finalCount, setFinalcount] = useState(0)

  function totalCount(input){
    let tempCount = 0;
    for(let i = 1; i <= finalCount; i++){
      tempCount += i;
    }
    return tempCount;
  }

  useMemo(totalCount,[])
  return (
    <>
      <div>
        <input type="number"
          placeholder='Enter number'
          onChange={(e)=>{setFinalcount(e.target.value)}}
        />
        <h2>{`The Final Count is: ${finalCount}`}</h2>
      </div>

      <div>
        <button onChange={()=>setCount(count+1)}>Count:{count}</button>
      </div>
    </>
  )
}

export default App
