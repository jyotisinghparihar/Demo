import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check email and password
        if (email === "pariharjyotisingh76@gmail.com" && password === "Jyoti@123") {
            alert("Login successful!");
            // Navigate to Home page
            navigate('/home');
        } else {
            alert("Incorrect email or password. Please try again.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <br />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginForm;
