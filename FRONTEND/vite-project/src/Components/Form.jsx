import React, { useState } from 'react';
import  '../css/Form.css'; 

const HospitalForm = ({ onSubmit }) => {
  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [bloodStock, setBloodStock] = useState([
    { bloodType: 'A+', quantity: 0 },
    { bloodType: 'A-', quantity: 0 },
    { bloodType: 'B+', quantity: 0 },
    { bloodType: 'B-', quantity: 0 },
    { bloodType: 'AB+', quantity: 0 },
    { bloodType: 'AB-', quantity: 0 },
    { bloodType: 'O+', quantity: 0 },
    { bloodType: 'O-', quantity: 0 },
  ]);

  const handleBloodStockChange = (index, field, value) => {
    const updatedBloodStock = [...bloodStock];
    updatedBloodStock[index][field] = value;
    setBloodStock(updatedBloodStock);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      hospitalName,
      address,
      contactNumber,
      bloodStock,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <label>Hospital Name:</label>
        <input
          type="text"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Contact Number:</label>
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </div>
      <div className='blood-stock'>
        <h3>Blood Stock:</h3>
        {bloodStock.map((unit, index) => (
          <div key={index}>
            <label>{unit.bloodType}:</label>
            <input
              type="number"
              value={unit.quantity}
              min="0"
              onChange={(e) =>
                handleBloodStockChange(index, 'quantity', parseInt(e.target.value, 10))
              }
            />
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalForm;