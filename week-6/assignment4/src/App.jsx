import { useState, useEffect } from "react"


function App() {
  let data = null
  fetch("http://localhost:3000/todo")
    .then(async (res)=>{
        const json =await res.json()
        data = json
    })
    console.log(data)

  return(
    <>      
    
      <Wrapper>
          <h1>John Doe</h1>
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio at unde quos voluptatem corporis eos vel dolorem quisquam officia provident?</h3>
      </Wrapper>

      <Wrapper>
        <TextComponent/>
      </Wrapper>

      <Wrapper>
        data.map((todo){<Todo title={todo.title} description={todo.description}></Todo>})
      </Wrapper>

    </>
  )

}


function Todo({title, description}){
  return(
    <>
      <h1>
        {title}
      </h1>
      <h4>
        {description}
      </h4>
    </>
  )
}








function Wrapper({children}){
  return(
    <div style={{border: "2px solid #000",
      borderradius: "8px",
      padding: "15px",
      margin:  "50px auto",
      width:"600px",
      boxshadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      fontfamily: "Arial, sans-serif"
      }}>

        {children}

    </div>
  )
}



function TextComponent(){

  return(
    <div>
        <h1>Jenny Doe</h1>
        <h3><center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime in eius perspiciatis recusandae facere ullam eaque enim modi quisquam?</center></h3>
    </div>
  )
}

export default App
