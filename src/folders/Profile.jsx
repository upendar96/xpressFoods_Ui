import React from 'react';
import { FaLock, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import EditProfile from '../extra/EditProfile';
import OrderHistory from '../extra/OrderHistory';


export const Profile = () => {
  const userName = localStorage.getItem("userName");
  const userAddress = localStorage.getItem("userAddress");
  const userEmail = localStorage.getItem("userEmail");
  const userPhone = localStorage.getItem("userPhone");

  return (
    <>
      <button className="back-button">
        <FaArrowLeft />
      </button>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-icon">
            <FaUserCircle size={80} color="#007bff" />
          </div>
          <h1 className="profile-title">Your Profile</h1>
          <form className="profile-form">
            <div className="form-group">
              <label htmlFor="username">Username: {userName}</label>
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number: {userPhone}</label>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address: {userEmail}</label>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address: {userAddress}</label>
              <div className="lock-icon">
                <FaLock size={10} color="171F2F" />
              </div>
            </div>
          </form>
          <EditProfile />
         
        </div>
        <OrderHistory/>
      </div>
    </>
  );
};

export default Profile;
