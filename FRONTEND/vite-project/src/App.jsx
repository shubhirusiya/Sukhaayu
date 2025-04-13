import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hospitals from './Components/Hospitals';
import BloodAvailability from './Components/BloodAvailability';
import Appointments from './Components/Appointments.jsx';
import LandingPage from './Components/LandingPage.jsx';
import NavBar from './Components/NavBar.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/blood-availability" element={<BloodAvailability />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;