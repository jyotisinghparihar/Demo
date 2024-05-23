import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <span className="navbar-brand">Your App</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/student" className="nav-link">Student Page</Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher" className="nav-link">Teacher Page</Link>
          </li>
        </ul>
      </nav>
      <div className="App-header">
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin! You have access to all pages.</p>
      </div>
    </div>
  );
};

export default Admin;