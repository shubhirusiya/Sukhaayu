import React from 'react';
import '../css/LandingPage.css'; // Updated path to the CSS file
import heroimage from '/src/assets/hero-image.jpg'; // Use an absolute path if the relative path fails

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="landing-main-title">Your Health HUB</h1>
        <h2 className="landing-sub-title">Find the care you deserve</h2>
        <button className="landing-button">Explore More</button>
      </div>
      <img src={heroimage} alt="Healthcare Hero" className="landing-hero-image" />
    </div>
  );
};

export default LandingPage;
