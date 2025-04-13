import React from 'react';
import '../css/LandingPage.css'; // Updated path to the CSS file
import heroimage from '../assets/hero-image.jpg'; // Updated the image import to use a relative path
import blooddonation from '../assets/blooddonation.avif'; // Import the blood donation image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="landing-overlay">
          <h1 className="landing-main-title">Your Health HUB</h1>
          <h2 className="landing-sub-title">Find the care you deserve</h2>
          <button className="landing-button">Explore More</button>
        </div>
        <img src={heroimage} alt="Healthcare Hero" className="landing-hero-image" />
      </div>
      <div className="content">
        <h2>Our Services</h2>
        <div className="contentboxes">
        <div className="content-box">
          <img src={blooddonation} alt="Blood Donation" />
          Find Blood Availability near you
        </div>
        <div className="content-box">Content 2</div>
        <div className="content-box">Content 3</div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
