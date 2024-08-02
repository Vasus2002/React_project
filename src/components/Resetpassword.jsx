import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Resetpassword() {
  
  const[password,setPassword] = useState('');
  const[confrimPassword,setConfirmPassword] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleOnSave = (event) => {
    if(!password && !confrimPassword){
      toast.error("Please Enter Both field");
    }
    else if(password !== confrimPassword){
      toast.error("Please enter same Password");
    }
    else if (!validatePassword(password)) {
      // toast.error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      toast.error("Please Entering Valid Password");
    }

  }
  
  return (
    <div className="container">
      <ToastContainer/>
      <h1>Reset Password</h1>
      <form>
        <label htmlFor="password">Enter Your Password:</label>
        <input
          type="password"
          id="password"  
          onChange={(e) => setPassword(e.target.value)}      
          value={password}
          required
        />
        <label htmlFor="Confrim_Pasword">Confrim Password</label>
        <input
          type="password"
          id="Confrim_Pasword"        
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confrimPassword}
          required
        />
        <button type="submit" onClick={handleOnSave}>Save</button>
      </form>
    </div>
  )
}
