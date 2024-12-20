import React, { useState } from 'react';
import { API_URL } from '../api';



const RaiderLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const LoginHandler = async (e) => {
    e.preventDefault();
    
    try {
      // Login request
      const response = await fetch(`${API_URL}/rider/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data)
        alert('Login success');
        setEmail("");
        setPassword("");
        localStorage.setItem('loginToken', data.riderToken);
   
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed");
    } finally {
     
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

      
      <p>if not existing user<button >register</button></p>

     
     
    </>
  );
};

export default RaiderLogin;
