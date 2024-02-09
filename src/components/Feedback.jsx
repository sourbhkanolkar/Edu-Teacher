import React from 'react'
import "../style/FeedbackCss.css"
import { useState,useEffect } from 'react'
import EduDataService from "../services/edu.services";

export default function Feedback() {
  const [ALLfeedback,setALLfeedback]=useState([]);

  useEffect(()=>{
    getALLfed();
  },[]);
  
  const getALLfed= async()=>{
    const data=await EduDataService.getALLFeedback();
    setALLfeedback(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
  }

  const getCfeedback= async ()=>{
    const data=await EduDataService.getCollageFeedback();
    setALLfeedback(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
    
  }

  const getTfeedback= async ()=>{
    const data=await EduDataService.getTeacherFeedback();
    setALLfeedback(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
  }

  const getCANTEENfeedback= async ()=>{
    const data=await EduDataService.getCanteenFeedback();
    setALLfeedback(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
  }

  const deleteHandele= async(id)=>{
    await EduDataService.deleteFeedback(id);
    alert("Feedbackdeleted");
    getALLfed();

  }

  


  return (
  <>
  <section id='Feedback-section'>
  <div className="container">
    <div className="row">
      <div className="feeback-title-box text-center">
        <h1 className='f-title'>Feedback</h1>
      </div>
      <div className="col-md-12 d-flex justify-content-center ">
           <div className="filter-box ">
           <span className='filter-btn' onClick={getCfeedback}>Collage</span>
           <span className='filter-btn' onClick={getCANTEENfeedback} >Canteen</span>
            <span className='filter-btn' onClick={getTfeedback} >Teachers</span>
           </div>
           
      </div>
    </div>

  <div className="row">   
      {ALLfeedback.map((doc,index)=>{
            return (
              <div className="col-12  d-flex justify-content-center ">
      <div className="feedback-box mt-3 ">
        <p className='feedback-text'>{doc.message}</p>
        <button className='btn feed-btn btn-danger' onClick={(e)=> deleteHandele(doc.id)}  >Delete</button>
       </div>
      </div>
            )
          })}


    </div>
  
  </div>

  </section>
  </>
  )
}
