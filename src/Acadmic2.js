import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './calaendar.js';

const Academic2 = () => {
  const [homeworkOpen, setHomeworkOpen] = useState(false);

  const toggleHomeworkDropdown = () => {
    setHomeworkOpen(!homeworkOpen);
  };

  const navbarStyles = {
    backgroundColor: "#AEB6BF",
    padding: "10px", // Adjusted padding
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%",
    zIndex: 1,
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  };

  const navbarItemStyles = {
    padding: "10px",
    color: "black",
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div>
     
      <div style={navbarStyles}>
        <div>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Academic Management</h2>
        </div>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li style={navbarItemStyles} onClick={toggleHomeworkDropdown}>
            <FontAwesomeIcon icon={faBook} style={{ marginRight: "10px" }} />
            <span>Assignment</span>
          </li>
         
        </ul>
      </div>
      {/* Dropdown content (if needed) */}
      {homeworkOpen && (
        <div style={{ backgroundColor: "white", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", borderRadius: "4px", padding: "10px", marginTop: "10px" }}>
          Homework Dropdown Content
        </div>
      )}
       <Calendar/>
    </div>
  );
};

export default Academic2;
