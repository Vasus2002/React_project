import React from 'react';
import '../Navbar/Footer.css';

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <section className="mb-4">
          <a href="#" className="btn btn-light btn-floating m-1" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#" className="btn btn-light btn-floating m-1" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#" className="btn btn-light btn-floating m-1" role="button">
            <i className="fab fa-google"></i>
          </a>

          <a href="#" className="btn btn-light btn-floating m-1" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#" className="btn btn-light btn-floating m-1" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a href="#" className="btn btn-light btn-floating m-1" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
    </footer>
  )
}