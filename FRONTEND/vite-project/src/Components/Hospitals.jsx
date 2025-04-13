import React, { useEffect, useState } from 'react';
import '../css/Hospitals.css'; // Import the CSS file

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch('/hospitals') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setHospitals(data));
  }, []);

  return (
    <div className="hospitals-container">
      <h2 className="hospitals-title">Nearby Hospitals</h2>
      <ul className="hospitals-list">
        {hospitals.map((hospital) => (
          <li key={hospital.id} className="hospital-item">
            {hospital.name} - {hospital.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hospitals;