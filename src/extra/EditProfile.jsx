import React, { useState } from 'react';
import { API_URL } from '../api';


const EditProfile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const userId = localStorage.getItem('userId');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateData = {};
        if (username) updateData.username = username;
        if (phonenumber) updateData.phonenumber = phonenumber;
        if (email) updateData.email = email;
        if (address) updateData.address = address;

        try {
            const response = await fetch(`${API_URL}/user/update/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('User updated:', data);
                window.location.reload();
            } else {
                console.error('There was an error updating the user!', data);
            }
        } catch (error) {
            console.error('There was an error updating the user!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="edit-profile-form">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                    type="text"
                    id="mobileNumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="submit-btn">Update</button>
            </div>
        </form>
    );
}

export default EditProfile;
