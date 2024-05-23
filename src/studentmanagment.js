import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser, faIdCard, faAngleDown, faAngleUp, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Studentregistration from './Studentregistration.js';

const Studentmanagement = () => {
  const [certificateOpen, setCertificateOpen] = useState(false);
  const [homeworkOpen, setHomeworkOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const toggleCertificateDropdown = () => {
    setCertificateOpen(!certificateOpen);
    setHomeworkOpen(false);
    setScheduleOpen(false);
  };

  const toggleHomeworkDropdown = () => {
    setHomeworkOpen(!homeworkOpen);
    setCertificateOpen(false);
    setScheduleOpen(false);
  };

  const toggleScheduleDropdown = () => {
    setScheduleOpen(!scheduleOpen);
    setCertificateOpen(false);
    setHomeworkOpen(false);
  };

  const navbarStyles = {
    backgroundColor: "#AEB6BF",
    padding: "0px",
    display: "flex",
    justifyContent: "space-between", // Align items on both ends
    alignItems: "center",
    width: "100%",
    zIndex: 1,
  };

  const navbarItemStyles = {
    padding: "10px",
    color: "black",
    display: "inline-flex",
    alignItems: "center",
    margin: "auto 10px",
    position: "relative",
    cursor: "pointer",
  };

  const dropdownStyles = {
    position: "absolute",
    top: "100%",
    left: "0",
    width: "200px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" ,
    borderRadius: "4px",
    display: "none",
  };

  const dropdownStylesVisible = {
    ...dropdownStyles,
    display: "block",
  };

  return (
    <div>
    

      <div style={navbarStyles}>
        <div>
          <h2 style={{ margin: 0 }}>Student Management</h2>
        </div>
        <ul style={{ padding: 8 }}>
          <li style={navbarItemStyles} onClick={toggleCertificateDropdown}>
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "10px", }} />
            <span>Register</span>
            <FontAwesomeIcon icon={certificateOpen ? faAngleUp : faAngleDown} style={{ marginLeft: "auto" }} />
            <div style={certificateOpen ? dropdownStylesVisible : dropdownStyles}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li><Link
  to="/Admission"
  style={{
    fontFamily: "Arial, sans-serif",
    fontSize: "1.0rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    textDecoration: 'none',
    color: 'inherit'
  }}
  onClick={() => {
    window.scrollTo(0, 0);
  }}
>
  Admission List
</Link>
</li>
              </ul>
            </div>
          </li>
          <li style={navbarItemStyles} onClick={toggleHomeworkDropdown}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
            <span>Profile</span>
           
          </li>
         
        </ul>
       
      </div>
      <Studentregistration/>
    </div>
 
  );
};

export default Studentmanagement;
