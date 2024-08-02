import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
// import Register from './Register';
import Forgotpassword from './Forgotpassword';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
// import e from 'cors';


function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigator = useNavigate();
    const [error,setError] =useState(null);
    // useEffect(() => {
    //   if(localStorage.getItem('user-info')){
    //     history.push("/add")
    //   }
    // })

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      console.log(email, password);
      if(!email && !password){
        toast.error("All Fields Requried.");
      }
      else if(!validateEmail(email)){
        toast.error("Invalid email address");
      }
      else if (!validatePassword(password)) {
        toast.error("Please enter valid password");
      }
      else{
      let item = { email , password };
      try {
        const response = await fetch('http://localhost:3000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(item)
        });
        navigator('/Navbar');
        toast.message("Success ")
        const result = await response.json();
        localStorage.setItem(JSON.stringify(result));
        
      } catch (error) {
        console.error(error);
      }
    }
    }


  return (
<>
    <div class="container">
      <ToastContainer style={{ fontSize: '11px' }}/>
        <div class="logo">
            <img src="logo.png" alt="Logo"/>
        </div>
        <h2>SideGuard</h2>
        <p>Login to Your Account</p>
        <form>
            <input type="email" placeholder="Enter your e-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
            <div class="remember-me">
                <input type="checkbox" id="remember-me"/>
                <label for="remember-me">Remember me</label>
            </div>
            <button type="submit" onClick={handleLogin}>Login</button>
            <Link to="/Forgotpassword" style={{marginLeft:'13rem',marginTop:'1rem'}}>Forgot Password?</Link>
        </form>
        <p style={{marginLeft:'4rem',marginTop:'revert'}}>Join now, <Link to="/Register">Create your account</Link></p>
    </div>
    </>
  );
}

export default Login;