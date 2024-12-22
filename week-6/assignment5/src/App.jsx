import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [buttonVal, setButtonVal] = useState(1)


  function onClickButton(val) {
    setButtonVal(val)
  }

  return (
    <>
      <button onClick={() => onClickButton(1)}>1</button>
      <button onClick={() => onClickButton(2)}>2</button>
      <button onClick={() => onClickButton(3)}>3</button>
      <button onClick={() => onClickButton(4)}>4</button>
      <Todo val={buttonVal}></Todo>
    </>
  )
}

function Todo({ val }) {

  const [todos, setTodos] = useState({})



  useEffect(() => {
    setTimeout(()=>{
      fetch(`https://dummyjson.com/todos/${val}`)
      .then(async (res) => {
        const json = await res.json()
        setTodos(json)
      })
    },2000)
  }, [val])


  return (
    <div>
      {todos ? (
        <>
          <h4>Title: {todos.todo}</h4>
          <h4>Completed: {todos.completed ? "Completed" : "Pending"}</h4>
          <h4>User ID: {todos.userId}</h4>
        </>
      ) : (
        <h4>Loading...</h4>
      )}
      <br />
    </div>
  )
}


export default App
