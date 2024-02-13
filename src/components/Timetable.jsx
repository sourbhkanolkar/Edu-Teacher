import React from 'react'
import { useState } from 'react';
import {collection,getDocs,getDoc,addDoc,doc} from "firebase/firestore";
import { ref,uploadBytes } from 'firebase/storage';
import { FileDb } from '../firebase-config';
import { v4 } from"uuid";
import logo from '../assets/logo.jpeg'

export default function Timetable() {
    const [file,setFile]=useState('');
    const [path,setPath]=useState('');
   
    const handelClick=()=>{
        const imgRef = ref(FileDb,`Timetable/${path}${v4()}`)
        uploadBytes(imgRef,file);
        alert(path);
       
       }


  return (
   <>
   <div className="container">
    <div className="row mt-3  justify-content-center">
    <div className="logo-box-intern d-flex justify-content-center">
     <img src={logo} alt='sdsdsds' id='logo-border-login' width='150px' style={{marginTop:"10px"}} />
     </div> 

        <h2 className='text-center'>Upload TimeTable</h2>
        <div className="col-12" style={{width:"400px"}} >
            
            <label htmlFor='class'>Class:</label>
            <select id='class' className='form-control' onChange={(e)=>setPath(e.target.value)}>
                <option>FYBCA-TIMETABLE/</option>
                <option>SYBCA-TIMETABLE/</option>
                <option>TYBCA-TIMETABLE/</option>
            </select>

            <input type='file' className='form-control mt-3' onChange={(e)=>setFile(e.target.files[0])} ></input>

            <button onClick={handelClick} className='btn mt-3'>Upload</button>

        </div>
    </div>
   </div>
   </>
  )
}
