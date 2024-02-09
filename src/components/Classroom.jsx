import React from 'react'
import { useState } from 'react'
import firebase from 'firebase/app'; 
import 'firebase/storage';


export default function Classroom() {
  const [file,setFile]=useState(null);
  const [path,setPath]=useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePathChange = (e) => {
    setPath(e.target.value);
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref();
    const uploadRef = storageRef.child(path + '/' + file.name);

    // Check if path exists, if not, create it
    uploadRef.parent
      .child(path)
      .putString('', 'data') // You can put any dummy data here
      .then(() => {
        // Path exists or created successfully, now upload the file
        uploadRef.put(file)
          .then((snapshot) => {
            console.log('File uploaded successfully');
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
          });
      })
      .catch((error) => {
        console.error('Error creating path:', error);
      });
  };


  

  return (
    <>
    <section id='classroom'>
      <div className="container">
        <div className="row mt-3 text-center d-flex justify-content-center">
          <h2>Upload Your Notes</h2>
          <div className="col-12  mt-3 d-flex flex-column justify-content-center bg-danger" style={{width:"400px"}}>
            <input  type='file' onChange={handleFileChange}  />
            <input className='mt-3' placeholder='enter the path' onChange={handlePathChange}  type='text'></input>
            <button className='btn-classrom btn-primary mt-3' onClick={handleUpload} style={{width:"200px"}} >Upload</button>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}
