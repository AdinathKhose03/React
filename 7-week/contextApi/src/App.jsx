import React, { useContext, useState } from 'react'
import MyContext from './MyContext';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <MyContext.Provider value={{count, setCount}}>
        <Wrapper>

        </Wrapper>
      </MyContext.Provider>

    </div>
  )
}


function Wrapper(){
  return (
    <>
      <h1>Hi I am i the Wrapper component</h1>
      <CounterComponent/>
      <ButtonComponent/>
    </>
  )
}
function CounterComponent(){
  const {count} = useContext(MyContext);
  return (
    <>
      <h3>Count : {count}</h3>
    </>
  )
}
function ButtonComponent(){
  const {setCount, count} = useContext(MyContext);
  return (
    <>
      <button onClick={()=>{
        setCount(count+1);
      }}>Click</button>
    </>
  )
}


export default App