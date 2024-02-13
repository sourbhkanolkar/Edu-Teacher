import React from 'react'
import EduDataService from "../services/edu.services";
import {collection,getDocs,getDoc,addDoc,deleteDoc,doc,query,where} from "firebase/firestore";
import { db2 } from '../firebase-config';
import { useState } from 'react';
import logo from '../assets/logo.jpeg'


export default function Assignment() {

  const [sub,setSub]=useState('');
  const [Assignment,setAssignment]=useState('');
  const [classY,setClassy]=useState('');
  const [duedate,setDuedate]=useState('');


  const handelSubmit= async ()=>{
    const osCollectionRef = collection(db2,"assignments", `${classY}`, `${sub}`);
    const newBook={
      Assignment,
      duedate
    
    }
  await addDoc(osCollectionRef,newBook);
  alert("done");
    

  }
  return (
  <>
  <div className="container">
    <div className="row d-flex justify-content-center mt-3">
    
    <div className="logo-box-intern d-flex justify-content-center">
     <img src={logo} alt='sdsdsds' id='logo-border-login' width='150px' style={{marginTop:"10px"}} />
     </div>

      <h2 className='text-center'> Assignement Upload</h2>
      <div className="col-12 mt-3 d-flex justify-content-center flex-column" style={{width:"500px"}}>
        <label htmlFor='subject'>Subject:</label>
           <input className='mt-3 form-control' id='subject' type='text' onChange={(e)=> setSub(e.target.value)} placeholder='enter subject' ></input>
          
          <label htmlFor='hehe'>Class:</label>
         <select className='form-control mt-2' name="" id="hehe" onChange={(e)=> setClassy(e.target.value)} >
           <option>FYBCA</option>
           <option>SYBCA</option>
           <option>TYBCA</option>
         </select>

           <label htmlFor='message'>Message:</label>
           <input className='mt-3 form-control' type='text' id='message' onChange={(e)=> setAssignment(e.target.value)} placeholder='enter mesage' ></input>
           <label htmlFor='due'>Due Date:</label>
           <input type='text' className='form-control mt-3' id='due' onChange={(e)=> setDuedate(e.target.value)} ></input>
           <button className='btn mt-3' onClick={handelSubmit} >SUBMIT</button>
      </div>
    </div>
  </div>
  
  
  </>
  )
}
