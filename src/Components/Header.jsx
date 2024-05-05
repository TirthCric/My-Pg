// Header.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import "../CSS/Header.css"

export default function Header() {
  return (
    <nav className="navbar">
      <div className="header-logo-section">
        <img src="../Images/my-pg-high-resolution-logo.png" className="navbar--logo" alt="logo" />
      </div>
      <div className="nav-items">
        <div className="item"><Link className='link-item' to="/">Home</Link></div>
        <div className="item"><Link className='link-item' to="/about">About</Link></div>
        <div className="item"><Link className='link-item' to="/forPGOwner">For Pg Owners</Link></div>
        <div className="item"><Link className='link-item' to="/contact">Contact us</Link></div>
      </div>
    </nav>
  );
}
