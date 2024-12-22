import { useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("AsIDAmKN")

  
  return (
    <>
      <h1 className='text-4xl text-center text-white margin mt-6'>Passsword Generator</h1>

    </>
  )
}



export default App
