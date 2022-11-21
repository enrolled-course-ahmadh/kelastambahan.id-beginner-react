import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <img src="img/logo.svg" alt="logo" />
        <ul className="menu-utama">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crud-js">CRUD JS</Link></li>
            <li><Link to="/kalkulator-js">Kalkulator JS</Link></li>            
        </ul>
        <form action="">
            <input className="form-control" placeholder="cari..." />
        </form>
    </div>
  )
}

export default Header