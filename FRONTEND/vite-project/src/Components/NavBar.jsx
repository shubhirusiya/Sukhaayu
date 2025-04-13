import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'; // Updated path to NavBar.css
import api from '../../axiosConfig';

const NavBar = () => {

  const user = localStorage.getItem('user');
  const handleLogout = () => {
    api.post('/auth/logout') // Call the logout API endpoint
    .then(() => {
      console.log("Logged out successfully");
    })
    localStorage.removeItem('user'); // Clear user data from local storage
    window.location.reload(); // Reload the page to reflect the changes
  }


  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hospitals">Hospitals</Link></li>
          <li><Link to="/blood-availability">Blood Availability</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li>{!user?(<Link to="/login">Login</Link>):(<button onClick={handleLogout}>Logout</button>)}</li>

         
        </ul>
      
      </div>
    </nav>
  );
};

export default NavBar;
