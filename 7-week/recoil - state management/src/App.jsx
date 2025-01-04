import React from 'react'
import {useRecoilState, useRecoilValue, RecoilRoot} from 'recoil';
import countAtom from './store/atom/Count';
function App() {

  return (
    <div>

        <RecoilRoot>
          <Wrapper/>
        </RecoilRoot>
            
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
  const count = useRecoilValue(countAtom)
  return (
    <>
      <h3>Count : {count}</h3>
    </>
  )
}
function ButtonComponent(){
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Click</button>
    </>
  )
}


export default App