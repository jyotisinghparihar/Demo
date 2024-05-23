import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Studentmanagement2 = () => {
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
      
       
         
       
      </div>
    
    </div>
 
  );
};

export default Studentmanagement2;