import React, { useState } from 'react';
import { API_URL } from '../api';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import FooterPage from '../pages/FooterPage';


const Login = ({ welcomeHandler, registerHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const LoginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Login request
      const response = await fetch(`${API_URL}/user/userlogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const userData = await response.json();
      if (response.ok) {
        alert('Login success');
        setEmail("");
        setPassword("");
        localStorage.setItem('loginToken', userData.userToken);
        const { userId, userName, userEmail, userPhone, userAddress } = userData;
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('userPhone', userPhone);
        localStorage.setItem('userAddress', userAddress);
        welcomeHandler();
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  }

  const sendOtp = async () => {
    try {
      const response = await fetch(`${API_URL}/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber })
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to send OTP');
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch(`${API_URL}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to verify OTP');
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className="login">
        <h1 className="login-title">Login</h1>
      </div>
      <form className="login-form" onSubmit={LoginHandler}>
        <div className="form-group">
          <label htmlFor="formEmail">Email</label>
          <input
            type="email"
            value={email}
            id="formEmail"
            className="input-field"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formPassword">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            id="formPassword"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <span className='show-password' onClick={handleShowPassword}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <h3 className="or">Or</h3>

      <form className='otp-form'>
        <div className="form-group">
          <label htmlFor="formPhone">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            id="formPhone"
            className="input-field"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="button" className="otp-btn" onClick={sendOtp}>Send OTP</button>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            className="input-field mt-2"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="button" className="otp-btn" onClick={verifyOtp}>Verify OTP</button>
        </div>
      </form>
      <p>if not existing user<button onClick={registerHandler}>register</button></p>

      <FooterPage />
    </>
  );
};

export default Login;
