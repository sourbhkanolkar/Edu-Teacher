import React from 'react'
import '../style/LoginCss.css'
import logo from '../assets/logo.jpeg'
import BookDataService from "../services/book.services";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const login_f = async () => {
    var name = document.getElementById('name-input').value;
    var pword = document.getElementById('password-input').value;
    const docSnap = await BookDataService.getBook(name);
    // console.log(docSnap.data().password)
  
    if (docSnap.data().password == pword) {
      navigate('/home')
    } else {
      alert("wrong password")
    }
   
  }

  return (
    <>
      <section id='login'>
        {/* <img src={logo} alt='sdsdsds' width='200px'  /> */}
        <div className="logo-box">
          <img src={logo} alt='sdsdsds' id='logo-border-login' width='180px' />
        </div>
        <div className="login-title-box">
          <h1 className='login-title'>LOGIN</h1>
        </div>

        <div className="form-box">
          <form id='login-form'>
            <input type='text' className='input-login-box' id='name-input' placeholder='enter your name' />
            <input type='password' className='input-login-box' id='password-input' placeholder='enter your passowrd' />
          </form>
        </div>
        <div className="btn-box">
          <button onClick={login_f} className='btn'>LOGIN</button>
        </div>



      </section>


    </>
  )
}
