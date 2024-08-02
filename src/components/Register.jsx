import React, { useState } from "react";

import { useNavigate,Link } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import '../components/register.css';
// import { toast } from "react-toastify";
// import axios from "axios";
import Login from "./Login";
// import bcyrpt from "bcrypt";
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [full_name, setfull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  // const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigator = useNavigate();
  const error = null;
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  function passwordShow(){
    var x = document.getElementById("form3Example4c");
    if(x.type === "password"){
      x.type = "text";
    }else{
      x.type = "password";
    }
  }

  const handleSubmit = async (event) => {
    const regobj = { full_name, email, password, confirm_password };
console.log(regobj);
event.preventDefault();
if(!full_name && !email && !password && !confirm_password){
  toast.error('All fields required. ', {
    fontSize: '11px',
  });
  // return;
}
else if (!validateEmail(email)) {
  toast.error("Invalid email address");
  // return;
} 
else if (!validatePassword(password)) {
  toast.error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
} else if (password !== confirm_password) {
  toast.error("Passwords do not match");
}
else{
  try{
  let result = await fetch('http://192.168.1.19:3000/auth/signup',{
    method: 'post',
    body: JSON.stringify({full_name,email,password,confirm_password}), 
    headers:{
      'Content-Type':'application/json' 
    },
  });
  result = await result.json(); 
  console.log(result);
  if(result.message === 'User with this email already exits'){
    toast.error('User with this email already exits');
  }else{
    toast.success('Successfully created');
  navigator('/Login');
  localStorage.setItem("user",JSON.stringify(result));
  }
}catch(error) {    
  console.error(error);
}
}
  };
  


  return (
      <>
        <div className="container-fluid">
      <div className="card text-black m-5" style={{ borderRadius: '25px' }}>
        <ToastContainer style={{ fontSize: '11px' }}/>
        <div className="card-body">
          <div className="row">
            <div className="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user me-3" style={{ fontSize: '1.5rem' }} />
                <input type="text" className="form-control" id="form1" placeholder="Name" style={{ width: '400px' }} onChange={(e) => setfull_name(e.target.value)} value={full_name} required/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope me-2" style={{ fontSize: '1.5rem' }} />
                <input type="email" className="form-control" id="form2" placeholder="Your Email"  style={{ width: '400px' }} onChange={(e) => setEmail(e.target.value)} value={email}required />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock me-3" style={{ fontSize: '1.5rem' }} />
                <input type="password" className="form-control" id="form3" placeholder="Password"  style={{ width: '400px' }} onChange={(e) => setPassword(e.target.value)} value={password} required />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key me-3" style={{ fontSize: '1.5rem' }} />
                <input type="password" className="form-control" id="form4" placeholder="Repeat your password"  style={{ width: '400px' }} onChange={(e) => setConfirmPassword(e.target.value)} value={confirm_password} required />
              </div>
              <div className="mb-1">
                <input type="checkbox" id="flexCheckDefault" />
                <label className="form-check-label" for="form2Example3">
                       Show Password
                </label>             
               </div>
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <button type="button" className="btn btn-primary mb-4" style={{ fontSize: '1.5rem' }} onClick={handleSubmit}>Register</button>
              <p>Have an Account, <Link to="/Login">Login</Link></p>
            </div>
            <div className="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
      </>
  );
}

export default Register;