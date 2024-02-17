
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import Internship from "./components/Internship";
import Notice from "./components/Notice";
import Feedback from "./components/Feedback";
import Classroom from "./components/Classroom";
import Assignment from "./components/Assignment";
import Timetable from "./components/Timetable";
import Result from "./components/Result";
import Atten from "./components/Atten";

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
      <Route path='/assignment' element={<Assignment />} />
      <Route path='/timetable' element={<Timetable />} />
      <Route path='/result' element={<Result />} />
      <Route path='/attendance' element={<Atten />} />
     </Routes>
     
     </BrowserRouter>
        
    </>
  )
}

export default App
