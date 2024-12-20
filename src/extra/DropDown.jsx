import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
const userName=localStorage.getItem('userName');
  const options = [
    { label: "Profile", path: "/profile" },
    { label: "DineOut", path: "/" },
    { label: "Rider", path: "/rider" },
    { label: "OrderHistory", path: "/orderhistory" },
    { label: "Cart", path: "/cart" },
    { label: "WishList", path: "/" },
    { label: "LogOut", path: "/" },
  ];

  const handleSelect = (path) => {
    setIsOpen(false); 
    navigate(path); 
  };

  return (
    <div style={{ position: "relative", width: "100px" }}>
    
      <div
    
        style={{
          padding: "10px",
          border: "4px solid white",
          borderRadius: "8px",
          cursor: "pointer",
          color:"white"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
          <FaUser size={30} color="#007bff" />
       {userName}^
      </div>

   
      {isOpen && (
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            position: "absolute",
            top: "40px",
            left: 0,
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "black",
            color:"white",
            zIndex: 1000,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: index !== options.length - 1 ? "1px solid #eee" : "none",
              }}
              onClick={() => handleSelect(option.path)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
