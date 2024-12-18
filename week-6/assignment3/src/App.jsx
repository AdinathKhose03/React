import { useState } from 'react'

let counter = 4

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:"Go to gym",
      description:"At 7 AM"
    },{
      id:2,
      title:"Go to gym",
      description:"At 7 AM"
    },{
      id:3,
      title:"Go to gym",
      description:"At 7 AM"
    }
  ])

  function addToDo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
    <>
      <button onClick={addToDo}>Add To-Do</button>
      {todos.map(todo => <ViewTodo key={todo.id} title={todo.title} description={todo.description}></ViewTodo>)}
    </>
  )
}

function ViewTodo({title, description}){
  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>Description: {description}</h2>
    </div>
  )
}

export default App
