import { React, lazy, Suspense } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

const Landing = lazy(()=>import('./components/Landing'))
const Dashboard = lazy(()=> import('./components/Dashboard'))



function App() {

  return (
    <>

      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"Loading..."}><Dashboard/></Suspense>}></Route>
          <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar(){
  const navigate = useNavigate()
  return (
    <>
    <div style={{background:"maroon", color:"white"}}>Hi this is nav-bar</div>
      <div>
        <button onClick={()=>{
          navigate('/');
        }}>Landing</button>

        <button onClick={()=>{
          navigate('/Dashboard');
        }}>Dashboard</button>

      </div>
    </>
  )
}

export default App
