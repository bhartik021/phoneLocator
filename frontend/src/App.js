import React, { useState } from "react";
import './App.css';

const PhoneLocation = () => {
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/get-location/?phone=${phone}`);
      if (!response.ok) {
        throw new Error("Failed to fetch location");
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setLocation(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setLocation(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Phone Number Location Finder</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <i className="fas fa-phone-alt input-icon"></i>
          <input
            type="text"
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>
        <button className="submit-button" type="submit">
          <i className="fas fa-search"></i> Get Location
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {location && (
        <div className="location-info">
          <p><strong>Country:</strong> {location.country || 'Not available'}</p>
          <p><strong>Location:</strong> {location.location || 'Not available'}</p>
          <p><strong>Carrier:</strong> {location.carrier || 'Not available'}</p>
          <p><strong>Country Code:</strong> {location.country_code || 'Not available'}</p>
          <p><strong>Line Type:</strong> {location.line_type || 'Not available'}</p>
          <p><strong>Valid:</strong> {location.valid ? "Yes" : "No"}</p>
          <p><strong>International Format:</strong> {location.international_format || 'Not available'}</p>
          <p><strong>Local Format:</strong> {location.local_format || 'Not available'}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneLocation;
