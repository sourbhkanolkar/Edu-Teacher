import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import EduDataService from "../services/edu.services";
import logo from '../assets/logo.jpeg'


export default function Notice() {
  const [notice,setNotice]=useState("");
  const [cunotice,setCunotice]=useState([]);
  useEffect(()=>{
    getNotices();

  },[]);

  const getNotices= async ()=>{
    const data= await EduDataService.getAllNotices();
    console.log(data.docs);
    setCunotice(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
  };

  const handelSubmit= async (e)=>{
    e.preventDefault();
   const newBook={
    notice
   }
   await EduDataService.addNotice(newBook);
   alert("notice added");
   getNotices();
   

  }
  const  deleteHandele= async (id)=>{
  await EduDataService.deleteNotice(id);
  alert("notice deleted");
  getNotices();

  }
  return (
 <>
 <section id='notice-page'>
    <div className="container">
        <div className="row">
        <div className="logo-box-intern d-flex justify-content-center">
     <img src={logo} alt='sdsdsds' id='logo-border-login' width='150px' style={{marginTop:"10px"}} />
     </div>
        <h2 className='text-center home-title'>UPLOAD NOTICES</h2>
            <div className="col-12">
            <form style={{display:"block",margin:"auto",width:"450px"}} >

            <div className="mb-3">
  <label htmlFor="notice-imput" className="form-label">Enter Notice</label>
  <textarea className="form-control" id="notice-imput" rows="3" onChange={(e)=>setNotice(e.target.value)}></textarea>
</div>
  
<button type="submit" className="btn btn-primary" onClick={handelSubmit}>UPLOAD</button>
</form>
            </div>
        </div>
        {/* below code is for the showing active notices */}
        <div className="row">
          <h2>active notices</h2>
          <div className="col-md-4">
          <div className="card" style={{width:"20 rem"}}>
  <ul className="list-group list-group-flush d-flex justify-content-between">
   
    {cunotice.map((doc,index)=> {
      return (
  <li key={doc.id} className="list-group-item">{doc.notice}<button onClick={(e)=> deleteHandele(doc.id)} className='btn btn-danger'>delete</button></li>
      )
    })}
  </ul>
 
</div>
          </div>
        </div>
    </div>
 </section>
 
 </>
  )
}
