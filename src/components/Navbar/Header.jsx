import React from 'react';
import '../Navbar/Header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          ShopNow
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Home</a>
          </li>
          <li>
            <a href="/about">Monitor</a>
          </li>
          <li>
            <a href="/contact">Alter</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="round-button">
          {/* <i className="fas fa-user">L</i> */}
          Login
        </button>
        <button className="round-button">
          {/* <i className="fas fa-user">L</i> */}
          Register
        </button>

      </div>
    </nav>
  );
}