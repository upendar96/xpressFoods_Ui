import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { API_URL } from '../api';


function Register({loginHandler}) {
    const [username, setUsername] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/user/userregister`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, phonenumber, email, address, password })
            });

            const data = await response.json();
            if (response.ok) {
                setUsername("");
                setPhonenumber("");
                setEmail("");
                setAddress("");
                setPassword("");
                alert("Registered successfully");
                loginHandler();
                
            } else {
                setError(data.error);
                alert("Registration Failed, Contact Admin");
            }
        } catch (error) {
            console.error("Registration failed", error);
            alert("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h1>User Registration</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="input-field"
                        placeholder="Enter your name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        className="input-field"
                        placeholder="Enter mobile number"
                        required
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input-field"
                        placeholder="Enter email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="input-field"
                        placeholder="Enter address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Set Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="input-field"
                        placeholder="Enter password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="show-password" onClick={handleShowPassword}>
                        {showPassword ? 'Hide' : 'Show'}
                    </span>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Register;
