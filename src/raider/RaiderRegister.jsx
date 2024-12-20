import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { API_URL } from '../api';
import { useNavigate } from "react-router-dom";


function RaiderRegister() {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
      navigate(path); 
    };
    const [ridername, setRidername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [PanNumber, setPanNumber] = useState("");
    const [AadharNumber, setAadharNumber] = useState("");
    const [BankAccountNumber, setBankAccountNumber] = useState("");
    const [DrivingLic, setDrivingLic] = useState("");
    const [RcNumber, setRcNumber] = useState("");
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
            const response = await fetch(`${API_URL}/rider/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ridername,  email, password,PanNumber,AadharNumber,BankAccountNumber,DrivingLic,RcNumber })
            });

            const data = await response.json();
            if (response.ok) {
                setRidername("");
                setEmail("");
                setPassword("");
                setPanNumber();
                setAadharNumber("");
                setBankAccountNumber('');
                setDrivingLic('');
                setRcNumber('');
               navigate('/riderlog')
                

                alert("Registered successfully");
               
                
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
        <> 
            <h1>Raider-Registration</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        id="ridername"
                        name="ridername"
                        className="input-field"
                        placeholder="Enter your name"
                        required
                        value={ridername}
                        onChange={(e) => setRidername(e.target.value)}
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

                <h2>Please enter your kyc details</h2>
                
                <div className="form-group">
                    <label htmlFor="pan">PAN-Number</label>
                    <input
                        type="tel"
                        id="pan"
                        name="pan"
                        className="input-field"
                        placeholder="Enter pan number"
                        required
                        value={PanNumber}
                        onChange={(e) => setPanNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="aadhar">aadharNumber</label>
                    <input
                        type="text"
                        id="aadhar"
                        name="aadhar"
                        className="input-field"
                        placeholder="Enter aadhar number"
                        required
                        value={AadharNumber}
                        onChange={(e) => setAadharNumber(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bank">Bank Account Number</label>
                    <input
                        type="text"
                        id="bank"
                        name="bank"
                        className="input-field"
                        placeholder="Enter BankAccount number"
                        required
                        value={BankAccountNumber}
                        onChange={(e) => setBankAccountNumber(e.target.value)}
                    />
                </div>
                <h2>Enter your driving eligibility details</h2>
                <div className="form-group">
                    <label htmlFor="mobile">DRL -number</label>
                    <input
                        type="number"
                        id="dln"
                        name="dln"
                        className="input-field"
                        placeholder="Enter driving-L number"
                        required
                        value={DrivingLic}
                        onChange={(e) => setDrivingLic(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Rc- Number</label>
                    <input
                        type="number"
                        id="rc"
                        name="rc"
                        className="input-field"
                        placeholder="Enter Rc-number"
                        required
                        value={RcNumber}
                        onChange={(e) => setRcNumber(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="submit-button" >Submit</button>
            </form>
        </>
    );
}

export default RaiderRegister;
