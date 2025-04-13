import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'; // Updated path to NavBar.css

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hospitals">Hospitals</Link></li>
          <li><Link to="/blood-availability">Blood Availability</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <button>Login</button>
        </ul>
      
      </div>
    </nav>
  );
};

export default NavBar;
