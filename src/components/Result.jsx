import React from 'react'
import { useState } from 'react';
import {collection,getDocs,getDoc,addDoc,doc} from "firebase/firestore";
import { ref,uploadBytes } from 'firebase/storage';
import { FileDb } from '../firebase-config';
import { v4 } from"uuid";

export default function Result() {
    const [file,setFile]=useState('');
    const [path,setPath]=useState('');

    const handelClick=()=>{
        const imgRef = ref(FileDb,`RESULTS/${path}${v4()}`)
        uploadBytes(imgRef,file);
        alert(path);
       
       }
   
  return (
  <>
  <div className="container">
    <div className="row">
        <h2 className='text-center'>Upload Results</h2>
        <div className="col-12">
        <label htmlFor='class'>Class:</label>
        <select id='class' className='form-control' onChange={(e)=>setPath(e.target.value)} >
            <option >FY-RESULT/</option>
            <option>SY-RESULT/</option>
            <option>TY-RESULT/</option>
        </select>
        <label htmlFor='file'>Result:</label>
        <input id='file' type='file' className='form-control mt-3' onChange={(e)=>setFile(e.target.files[0])} ></input>

        <button onClick={handelClick} className='btn mt-3'>Upload</button>
            
          
        </div>
    </div>
  </div>
  
  </>
  )
}
