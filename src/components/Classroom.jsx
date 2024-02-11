import React from 'react'
import { ref,uploadBytes } from 'firebase/storage';
import { FileDb } from '../firebase-config'
import { useState } from 'react';
import { v4 } from"uuid";

export default function Classroom() {
  const [file,setFile]=useState('');
  const [path,setPath]=useState('');
   
  const handelClick=()=>{
    const imgRef = ref(FileDb,`${path}${v4()}`)
    uploadBytes(imgRef,file);
    alert(path);
   
   }

  return (
   <>
    <div className="container">
      <div className="row justify-content-center">
        <h2 className='text-center mt-3'>Upload Notes</h2>
        <div className="col-12" style={{width:"400px"}}>
          <div className="input-form ">
          <div className="mb-3">
  <label for="formFile" className="form-label">Upload Files here</label>
  <input className="form-control" type="file" id="formFile" onChange={(e)=>setFile(e.target.files[0])}   />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Path:</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="FYBCA/OOC/SEMESTER-1/"  onChange={(e)=>setPath(e.target.value)}  />
</div>

<div className="mb-3">
  <button onClick={handelClick} className=' btn-danger' >Upload</button>
</div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
