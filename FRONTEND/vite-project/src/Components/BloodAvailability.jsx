import React, { useState } from 'react';

const BloodAvailability = () => {
  const [bloodType, setBloodType] = useState('');
  const [availability, setAvailability] = useState([]);

  const checkAvailability = () => {
    fetch(`/blood-availability?type=${bloodType}`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setAvailability(data));
  };

  return (
    <div>
      <h2>Blood Availability</h2>
      <input
        type="text"
        placeholder="Enter blood type (e.g., A+)"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
      />
      <button onClick={checkAvailability}>Check Availability</button>
      <ul>
        {availability.map((item, index) => (
          <li key={index}>
            {item.hospital} - {item.units} units
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BloodAvailability;