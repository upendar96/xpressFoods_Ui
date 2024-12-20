import React, { useState, useEffect } from 'react';
import { API_KEY } from '../api';
function UserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // Fetch location details using OpenCage API
          fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
              if (data.results.length > 0) {
                setLocation(data.results[0].formatted); 
              } else {
                setError("Location not found");
              }
            })
            .catch(() => setError("Failed to fetch location details"));
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, [API_KEY]);

  return (
    <div>
      <p>your current Location</p>
      {error ? (
        <p>Error: {error}</p>
      ) : location ? (
        <p>Location: {location}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default UserLocation;
