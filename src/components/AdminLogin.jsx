import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const navigate = useNavigate();
    const vali=()=>{
        var name=document.getElementById('Name').value;
        var password=document.getElementById('Password1').value;
        if(name==="sourabh" && password==="1234" ){
            navigate("/admin")
        }else{
            alert("wrong password");
        }
    }
  return (
 <>
  <section id='login-admin'>
   <div className="container">
    <div className="col-md-12">
        <h2 className='text-center'>LOGIN</h2>
    <form>
  <div class="mb-3">
    <label for="Name" class="form-label">Name</label>
    <input type="text" class="form-control" id="Name" />
   
  </div>
  <div class="mb-3">
    <label for="Password1" class="form-label">Password</label>
    <input type="password" class="form-control" id="Password1"/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={vali} >Submit</button>
</form>
    </div>
   </div>

  </section>
 
 </>
  )
}
