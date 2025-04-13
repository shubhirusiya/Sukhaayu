import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import axios from 'axios';
import Hospitals from './Components/Hospitals';
import BloodAvailability from './Components/BloodAvailability';
import LandingPage from './Components/LandingPage.jsx';
import NavBar from './Components/NavBar.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import './App.css';

export const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token with backend if needed
      axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/blood-availability" element={<BloodAvailability />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;