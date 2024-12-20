import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBox, FaHotel } from "react-icons/fa";
const Cards = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path); 
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      {/* Card 1 */}
      
      <div className="card"
      
        style={{
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          textAlign: "center",
          cursor: "pointer",
         
        }}
       
        onClick={() => handleCardClick("/firmcollection")}
      >
         <FaBox size={40} color="#007bff" />
        <h2>OrderOnline</h2>
        <p>Stay home order your fav food at your doorstep</p>
      </div>

      {/* Card 2 */}
      <div className="card"
        style={{
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => handleCardClick("/dine")}
      >
        <FaHotel size={40} color="#007bff" />
        <h2>DineOut</h2>
        <p>Find best place to eat with your loved one's</p>
      </div>

    </div>
  );
};

export default Cards;
