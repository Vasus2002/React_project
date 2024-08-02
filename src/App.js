import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
// import { createElement } from 'react';
import Forgotpassword from './components/Forgotpassword.jsx';
import ResetPassword from './components/Resetpassword.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        <Route path='/Resetpassword' element={<ResetPassword/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;