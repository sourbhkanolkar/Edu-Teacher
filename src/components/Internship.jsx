import React from 'react'
import "../style/internshipCss.css";
import { useState } from 'react';
import EduDataService from "../services/edu.services";
import { useEffect } from 'react';
import { doc } from 'firebase/firestore';
import logo from '../assets/logo.jpeg'


export default function Internship() {
  const [internshipCompany,setInternshipCompany]=useState("");
  const [duration,setDuration]=useState("");
  const [role,setRole]=useState("");
  const [cuInternship,setCuInternship]=useState([]);

  useEffect(()=>{
    getInternship();
  },[]);

  const getInternship= async()=>{
    const data=await EduDataService.getAllInternship();
    setCuInternship(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
   


  }

  const handelSubmit= async (e)=>{
    e.preventDefault();
    const newBook={
    company:internshipCompany,
    period:duration,
    role:role
    }
    await EduDataService.addBooks(newBook);
    alert("internship uploaded")
    getInternship();
  }
  const deleteHandele= async(id)=>{
    await EduDataService.deleteBooks(id);
    alert("notice delted");
    getInternship();

  }

  return (
 <>
 <div className="container">
  <div className="row">
     <div className="logo-box-intern d-flex justify-content-center">
     <img src={logo} alt='sdsdsds' id='logo-border-login' width='150px' style={{marginTop:"10px"}} />
     </div>

    <h2 className='text-center'>UPLOAD INTERNSHIP</h2>
    <div className="col-md-12">
    <form style={{display:"block",margin:"auto",width:"450px"}}>
  <div className="mb-3">
    <label htmlFor="inter-name" className="form-label">Name of Internship</label>
    <input type="text" className="form-control" id="inter-name" aria-describedby="emailHelp" onChange={(e)=> setInternshipCompany(e.target.value)}  />
    <div id="emailHelp" className="form-text"></div>
  </div>
   
  <div className="mb-3">
    <label htmlFor="inter-name" className="form-label">Name of Role</label>
    <input type="text" className="form-control" id="inter-name" aria-describedby="emailHelp" onChange={(e)=> setRole(e.target.value)}  />
    <div id="emailHelp" className="form-text"></div>
  </div>


  <div className="mb-3">
    <label htmlFor="duration" className="form-label">Duration</label>
    <select className="form-select" id='duration' aria-label="Default select example" onChange={(e)=> setDuration(e.target.value)} >
  <option defaultValue={"0"}>Open this select  Duration</option>
  <option value="1">One Month</option>
  <option value="2">Two Month</option>
  <option value="3">Three Month</option>
</select>
  </div>
  
  <button type="submit" onClick={handelSubmit} className="btn btn-primary">Submit</button>
</form>

    </div>
  </div>

  {/* below code is for active internship */}
   <div className="row">
    <h2>active internship</h2>
    <div className="col-md-4">
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Role</th>
            <th scope='col'>Duration</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope='row'>1</th>
            <td>oneplus</td>
            <td>3 months</td>
          </tr> */}
          {cuInternship.map((doc,index)=>{
            return (
              <tr key={doc.id}>
            <th scope='row'>{index+1}</th>
            <td>{doc.company}</td>
            <td>{doc.role} </td>
            <td>{doc.period} Months</td>
            <button className='btn btn-danger intern-delete-btn' onClick={(e)=> deleteHandele(doc.id)} >Delete</button>
          </tr>
            )
          })}
         
        </tbody>
        
      </table>
    </div>
   </div>

 </div>
 </>
  )
}
 