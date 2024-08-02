import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Resetpassword from './Resetpassword';
import Login from './Login';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigator = useNavigate();
  const [error,setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    if(!email){
      toast.error("Please enter email");
    }else{
    event.preventDefault();
    // Here you would typically send a request to your backend to reset the password
    navigator('/Resetpassword');
    console.log('Email submitted:', email);
    }
  };

  return (
    <div className="container">
      <ToastContainer/>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" onClick={handleSubmit}>Reset my password</button>
      </form>
      <p style={{marginLeft:'6rem',marginTop:'1rem'}}>
        Return to <Link to="/Login">Sign In</Link>
      </p>
    </div>
  );
}

export default ResetPassword;