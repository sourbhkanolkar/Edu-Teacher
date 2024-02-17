import React from 'react'
import '../style/HomeCss.css'
import internshipicon from '../assets/internship.svg';
import noticesIcon from '../assets/notices-board.svg';
import classroomIcon from '../assets/Classroom.png';
import assenIcon from '../assets/assenment.png';
import {Link } from 'react-router-dom';
import FeedbackIcon from '../assets/feedback.png';
import TimetableIcon from '../assets/timetable.jpg';
import ResultIcon from '../assets/result.png';



export default function Home() {
  return (
   <>
   <section id='home-page'>
   <div className="container">
    <div className="row">
      <h2 className='text-center home-title'>WELCOME TO EDUSCRIBE</h2>
      
      <div className="col-md-4">
      <div className="card c-home" style={{width:"15rem"}}>
  <img src={internshipicon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Internship</h5>
    <p className="card-text">upload available internship for students</p>
    <div className="btn-box text-center">
  
    <Link to="/internship"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>
   
      <div className="col-md-4">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={internshipicon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Attendance</h5>
    <p className="card-text">upload available Attendance for students</p>
    <div className="btn-box text-center">
    <Link to="/attendance"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>

      <div className="col-md-4">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={noticesIcon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Notices</h5>
    <p className="card-text">upload available notices for students</p>
    <div className="btn-box text-center">
    <Link to="/notice"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>

      <div className="col-md-4 mt-3">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={FeedbackIcon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Feedback</h5>
    <p className="card-text">View Feedback of students </p>
    <div className="btn-box text-center">
    <Link to="/feedback"><a href="#" className="btn btn-primary">VIEW</a></Link>
    </div>
  </div>
</div>
      </div>

      <div className="col-md-4 mt-3">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={classroomIcon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Classroom</h5>
    <p className="card-text">Upload Notes</p>
    <div className="btn-box text-center">
    <Link to="/classroom"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>

      <div className="col-md-4 mt-3">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={assenIcon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Assigenment</h5>
    <p className="card-text">Upload Assigenemnt</p>
    <div className="btn-box text-center">
    <Link to="/assignment"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>   

      <div className="col-md-4 mt-3">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={TimetableIcon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Timetable</h5>
    <p className="card-text">Upload Timetable</p>
    <div className="btn-box text-center">
    <Link to="/timetable"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>

       <div className="col-md-4 mt-3">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={ResultIcon} style={{width:"100%",height:"260px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Results</h5>
    <p className="card-text">Results Timetable</p>
    <div className="btn-box text-center">
    <Link to="/result"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>      







    </div>
   </div>
   </section>
   </>
  )
}
