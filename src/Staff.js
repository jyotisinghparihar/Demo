import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillWave, faUserCheck, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Staff = () => {
  const [certificateOpen, setCertificateOpen] = useState(false);

  const toggleCertificateDropdown = () => {
    setCertificateOpen(!certificateOpen);
  };

  const navbarStyles = {
    backgroundColor: "#AEB6BF",
    padding: "0px",
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
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
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
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Staff Management</h2>
        </div>
        <ul style={{ padding: 8 }}>
          <li style={navbarItemStyles} onClick={toggleCertificateDropdown}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
            <span>Employee</span>
            <FontAwesomeIcon icon={certificateOpen ? faAngleUp : faAngleDown} style={{ marginLeft: "auto" }} />
            <div style={certificateOpen ? dropdownStylesVisible : dropdownStyles}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li><Link to="/emp"style={{ fontFamily: "Arial, sans-serif", fontSize: "1.0rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", textDecoration: 'none', color: 'inherit' }}>Employee List</Link></li>
                <li><Link to="/IDGenerate "style={{ fontFamily: "Arial, sans-serif", fontSize: "1.0rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", textDecoration: 'none', color: 'inherit' }}>ID Generate</Link></li>
              </ul>
            </div>
          </li>
          <li style={navbarItemStyles}>
  <Link to="/Salary" style={{ textDecoration: 'none', color: 'inherit' }}>
    <FontAwesomeIcon icon={faMoneyBillWave} style={{ marginRight: "10px" }} />
    <span>Salary Detail</span>
  </Link>
</li>
          <li style={navbarItemStyles}>
  <FontAwesomeIcon icon={faUserCheck} style={{ marginRight: "10px" }} />
  <span style={{ marginRight: "150px" }}>Attendance</span>
</li>

        </ul>
      </div>
    </div>
  );
};

export default Staff;
