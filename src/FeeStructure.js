import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChalkboardTeacher, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const FeeStructure = () => {
  const [isOpen, setIsOpen] = useState(null); // State to manage dropdown visibility
  
  const toggleDropdown = (index) => {
    setIsOpen(index); // Set dropdown visibility based on the clicked navbar item
  };

  const navbarStyles = {
    backgroundColor: "#AEB6BF",
    padding: "0px",
    display: "flex",
    justifyContent: "space-between", // Align items on both ends
    alignItems: "center",
  };

  const navbarItemStyles = {
    padding: "10px",
    color: "black",
    display: "inline-flex",
    alignItems: "center",
    margin: "auto", // Center items horizontally
    position: "relative", // Add position relative for dropdown positioning
    cursor: "pointer", // Add cursor pointer for clickable effect
  };

  const dropdownStyles = {
    position: "absolute",
    top: "100%",
    left: "0",
    width: "200px", // Adjust dropdown width as needed
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow to dropdown
    borderRadius: "4px",
    display: "none", // Initial display state for dropdown
  };

  return (
    <div>
      <div style={navbarStyles}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Fees Management</h2>
        <ul style={{ padding: 8 }}>
          <li style={navbarItemStyles} onClick={() => toggleDropdown(0)}> {/* Toggle dropdown when clicking */}
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
            <Link to="/Structure" style={{ textDecoration: 'none', color: 'inherit' }}>Fee Structure</Link>
              {/* Dropdown content */}
             
          
          </li>

          <li style={navbarItemStyles} onClick={() => toggleDropdown(0)}> {/* Toggle dropdown when clicking */}
            <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: "10px" }} />
            <Link to="/EmployeeTable" style={{ textDecoration: 'none', color: 'inherit' }}>Staff</Link>
              {/* Dropdown content */}
             
          
          </li>

          <li style={navbarItemStyles} onClick={() => toggleDropdown(0)}> {/* Toggle dropdown when clicking */}
            <FontAwesomeIcon icon={faUserGraduate} style={{ marginRight: "10px" }} />
            <Link to="/Fessschool" style={{ textDecoration: 'none', color: 'inherit' }}>Student</Link>
              {/* Dropdown content */}
             
          
          </li>
          </ul>
          {/* Repeat the same structure for other navbar items */}
       </div>
      </div>
  );
};

export default FeeStructure;