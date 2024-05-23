import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS for dropdown functionality

const Header = ({ title }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .header-input {
        background-color: #009CE0;
        color: white;
        border: 2px solid #ccc;
        padding: 5px;
        border-radius: 3px;
        box-shadow: inset 0 1px 2px rgba(234, 218, 218, 0.1);
        text-align: center;
        margin-right: 15px;
      }
      .header-input::placeholder {
        color: white;
      }
      .search-box {
        width: 200px; /* Adjust the width as needed */
      }
      .class-dropdown {
        width: 150px; /* Adjust the width as needed */
      }
      .student-management-link {
        margin-right: 20px;
        color: black; /* Set default text color */
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
    
      .dropdown-content .student-management-link:hover {
        background-color: #f1f1f1;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      .dropdown .dropbtn {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0;
        font: inherit;
        margin-right: 20px; /* Add margin to the right of the dropdown */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <a className="navbar-brand student-management-link" href="#" style={{ fontSize: '1.5em' }}>🎓B2B360</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto" style={{ fontSize: '1.2em',marginLeft:'700px' }}>
  <li className="nav-item">
    <a className="nav-link student-management-link" href="#" style={{ color: 'black' }}>🏠 Home</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle student-management-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '1.2em', color: 'black' }}> Login </a>
    <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
      <a className="dropdown-item student-management-link" href="Login">Admin</a>
      <a className="dropdown-item student-management-link" href="Login">Staff</a>
      <a className="dropdown-item student-management-link" href="Login">Student/Parents</a>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link student-management-link" href="#" style={{ color: 'black' }}>Contact Us</a>
  </li>
</ul>
          </div>
        </nav>
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <div className="student-management-link">
            <span style={{ color: '#1e90ff', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '3.9em', textShadow: '1px 1px 2px #200', fontStyle: 'italic' }}>
              UNLOCK SMART STUDENT ID CARD MANAGEMENT WITH
            </span>
            <span style={{ color: '#2E8B57', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '1.9em', textShadow: '1px 1px 2px #200', fontStyle: 'italic' }}>
              EDU360
            </span>
            <span style={{ color: '#000000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '2.9em', textShadow: '1px 1px 2px #200', fontStyle: 'italic' }}>
              Streamlined, Secure, Customizable
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
