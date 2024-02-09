
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import Internship from "./components/Internship";
import Notice from "./components/Notice";
import Feedback from "./components/Feedback";
import Classroom from "./components/Classroom";

function App() {
  

  return (
    <>
     <BrowserRouter >
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/internship' element={<Internship />} />
      <Route path='/notice' element={<Notice />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/classroom' element={<Classroom />} />
     </Routes>
     
     </BrowserRouter>
        
    </>
  )
}

export default App
