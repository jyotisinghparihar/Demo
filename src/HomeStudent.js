import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faDollarSign, faUserClock, faChalkboardTeacher, faUserGraduate, faGraduationCap, faCog, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Acadmic2 from './Acadmic2.js';
import Attendance2 from './Attendance2.js';
import Fess from './Fess.js';
import Event from './Event.js';
import FeeStructure2 from './FeeStructure2.js';
import Fessschool from './Fessschool.js';
import Studentss from './Studentss.js';

import Main from './main.js';
import Studentmanagment2 from './studentmanagment2.js';



import SettingsPage from './SettingsPage.js';


import Calendar from './calaendar.js';


const HomeStudent = () => {
  const [isOpen,] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [greeting, setGreeting] = useState("");
  const [contentIndex, setContentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [sidebarItemsDisabled, setSidebarItemsDisabled] = useState(false);

  useEffect(() => {
    const storedGreeting = localStorage.getItem("greeting");
    if (storedGreeting) {
      setGreeting(storedGreeting);
    } else {
      setGreeting(getGreetingMessage());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("greeting", greeting);
  }, [greeting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleGreetingChange = (event) => {
    setGreeting(event.target.value);
  };

  const getGreetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return "Good Morning Member ";
    } else if (currentTime < 15) {
      return "Good Afternoon Member";
    } else {
      return "Good Evening Member";
    }
  };

  const handleLinkClick = () => {
    setShowImage(false);
    setSidebarItemsDisabled(true);
  };

  const sidebarItemClick = () => {
    if (sidebarItemsDisabled) {
      setSidebarItemsDisabled(false);
    }
  };

  const sidebarStyles = {
    width: isOpen ? "12%" : "0",
    height: isOpen ? "calc(100% - 12vh)" : "0",
    backgroundColor: "#012353 ",
    overflowX: "hidden",
    transition: "0.5s",
    position: "fixed",
    marginTop:'10px',
    bottom: 0,
    zIndex: 100,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
    justifyContent: "center", // Centering the sidebar vertically
    alignItems: "Right", // Aligning items horizontally
  };

  const contentStyles = {
    marginLeft: isOpen ? "12%" : "0",
    transition: "0.5s",
    padding: "15px",
    width: isOpen ? "88%" : "100%",
    height: "100vh",
    position: "relative",
    zIndex: 1,
    marginTop: "13vh",
    overflowY: "auto"
  };

  const imageStyles = {
    display: "flex",
    alignItems: "center",
    transition: "transform 0.5s ease",
    transform: `translateX(-${contentIndex * 100}%)`
  };

  const styles = `
    @keyframes changeColorB {
      0%, 100% { color: #58D68D; }
      50% { color: white; }
    }

    @keyframes changeColor2 {
      %, 100% { color: white; }
      50% { color: #58D68D; }
    }
  `;

  const content = [
    { type: "image", url: "school3.webp" },
    { type: "image", url: "meting.jpg" },
  ];

  return (
    <Router>
      <div>
        <style>{styles}</style>
        <div className="d-flex justify-content-between align-items-center p-2" style={{ backgroundColor:'#012353 ', height:"auto", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", position: "fixed", width: "100%", zIndex: "1000" }}>

        <div className="d-flex align-items-center">
            <img src="eduction.webp" alt="" style={{ width: "90px", height: "50px", marginRight: "20px", borderRadius: "95px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }} />
            <h1 className="text-light m-0" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.8rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            <span style={{ animation: 'changeColorB 4s infinite', color: "green" }}>B</span>
                  <span style={{ animation: 'changeColor2 4s infinite' }}>2</span>
              <span style={{ animation: 'changeColorB 4s infinite', color: "green" }}>B</span>
              <span style={{ color: "" }}> </span>
              <span style={{ color: "" }}>STUDENT </span>
              <span style={{ color: "#58D68D" }}>3</span>
              <span style={{ color: "" }}>6</span>
              <span style={{ color: "#58D68D" }}>0</span>
            </h1>
            <div className="text-light ml-3" style={{ fontFamily: "Roboto", color: "black", fontSize: "1.0rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", marginLeft: '290px', marginTop: '30px' }}>{greeting}</div>
          </div>
         

          <input type="text" className="form-control mr-2" style={{ width: "200px" }} placeholder="Search..." value={searchText} onChange={handleSearchChange} />
        </div>

        <div className="d-flex" style={{ height: "88vh" }}>
          <div className="sidebar" style={sidebarStyles}>
            <ul className="list-unstyled">
              <li className="py-3">
                <div style={{ textAlign: "left" }}>
                  <FontAwesomeIcon icon={faHome} className={`text-decoration-none text-white mb-1 ${sidebarItemsDisabled ? 'disabled' : ''}`} style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", marginRight: "3px" }} onClick={sidebarItemClick} />
                  <NavLink to="/main" activeClassName="active" className={`text-decoration-none text-white ${sidebarItemsDisabled ? 'disabled' : ''}`} onClick={handleLinkClick} style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Home</NavLink>
                </div>
              </li>



              <li className="py-3 ">
                <div   style={{ textAlign: "left" }}>
                  <FontAwesomeIcon icon={faUser}className="text-decoration-none text-white mb-1" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",marginRight: "3px"}} />
                  <NavLink to="/studentmanagment2" activeClassName="active" className="text-decoration-none text-white"  onClick={handleLinkClick} style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  }}>Student</NavLink>
                </div>
              </li>

              <li className="py-3">
                <div style={{ textAlign: "left" }}>
                  <FontAwesomeIcon icon={faUserGraduate} className="text-decoration-none text-white mb-1" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",marginRight: "3px" }} />
                  <NavLink to="/Acadmic2" activeClassName="active" className="text-decoration-none text-white" onClick={handleLinkClick} style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  }}>Academic</NavLink>
                </div>
              </li>

              <li className="py-3">
                <div  style={{ textAlign: "left" }}>
                  <FontAwesomeIcon icon={faUserClock} className="text-decoration-none text-white mb-1" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",marginRight: "3px" }} />
                  <NavLink to="/Attendance2" activeClassName="active" className="text-decoration-none text-white" onClick={handleLinkClick} style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  }}>Attendance</NavLink>
                </div>
              </li>

             

              <li className="py-3 text-center">
                <div style={{ textAlign: "left" }}>
                  <FontAwesomeIcon icon={faMoneyBillWave}className="text-decoration-none text-white mb-1" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",marginRight: "3px" }} />
                  <NavLink to="/FeeStructure2" activeClassName="active" className="text-decoration-none text-white" onClick={handleLinkClick} style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  }}>Fees</NavLink>
                </div>
              </li>


              
             

              <li className="py-3">
                <div style={{ textAlign: "left" }}>
                  <FontAwesomeIcon icon={faCog} className="text-decoration-none text-white mb-1" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" ,marginRight: "3px"}} />
                  <NavLink to="/SettingsPage" activeClassName="active" className="text-decoration-none text-white" onClick={handleLinkClick} style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",marginRight:'16px'  }}>Settings</NavLink>
                </div>
              </li>
            </ul>
          </div>

          <div className="content" style={contentStyles}>
            <div style={imageStyles}>
              {content.map((item, index) => (
                <React.Fragment key={index}>
                  {item.type === "image" && showImage && <img src={item.url} alt="" className="img-fluid mb-3" style={{ width: "100%", height: "80%", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }} />}
                </React.Fragment>
              ))}
            </div>
            <Routes>
              <Route path="/main" element={<Main/>} />
              <Route path="/Fess" element={<Fess/>} />
              <Route path="/Attendance2" element={<Attendance2/>} />
              <Route path="/FeeStructure2" element={<FeeStructure2 />} />
              <Route path="/Fessschool" element={<Fessschool />} />
              <Route path="/Acadmic2" element={<Acadmic2 />} />
              <Route path="/Event" element={<Event />} />
             
              <Route path="/Studentss" element={<Studentss />} />
              
            
              <Route path="/studentmanagment2" element={<Studentmanagment2 />} />
              
              <Route path="/SettingsPage" element={<SettingsPage />} />
              <Route path="/caleandar" element={<Calendar />} />


            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default HomeStudent;