import React from 'react'
import BookDataService from "../services/book.services";
import {collection,getDocs,getDoc,addDoc,deleteDoc,doc,query,where,setDoc} from "firebase/firestore";
import { db } from '../firebase-config';
import { useState } from 'react';

export default function Admin() {

    const [Name,setName]=useState("");
    const [password,setPassword]=useState("");

  const handelsubmit= async ()=>{
    var name=document.getElementById('name').value;
    var password1=document.getElementById('password').value;
      
    setName(name);
    setPassword(password1);
    const osCollectionRef = collection(db,"teachers_bca" );
    const newBook={
        name,
        password1
      
      }
      await setDoc(doc(osCollectionRef, name), { name, password: password1 }); //for adding teachers with name
      alert("done");
  }

  return (
    <>
 <section id='admin-home'>
  <div className="container">
   <div className="row">
    <h2 className='text-center'>ADMIN-PAGE</h2>
    <p>add Teacher/Staff</p>
    <div className="col-md-12">
        <label for="name">Name:</label>
        <input type='text' id='name' className='form-control'></input>
        <br></br>
        <label for="password">Password:</label>
        <input id='password' type='password' className='form-control'></input>

        <button className='btn btn-danger mt-3' onClick={handelsubmit} >Upload</button>


    </div>
   </div>
  </div>
 </section>
    </>
  )
}
