import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Certificate from './Certificate.js';

const HomePage = () => {
  const [isOpen, ] = useState(true); // Set isOpen to true initially
  const [searchText, setSearchText] = useState(""); // State to store search text
  const [greeting, setGreeting] = useState("");
  const [imageIndex, setImageIndex] = useState(0); // State to track the index of the current image

  useEffect(() => {
    // Retrieve greeting from local storage if available
    const storedGreeting = localStorage.getItem("greeting");
    if (storedGreeting) {
      setGreeting(storedGreeting);
    }
    else {
      setGreeting(getGreetingMessage());
    }
  }, []);

  useEffect(() => {
    // Store greeting in local storage
    localStorage.setItem("greeting", greeting);
  }, [greeting]);

  useEffect(() => {
    // Function to change the image after 1 second
    const timer = setTimeout(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming there are 3 images, change it according to your actual number
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer to avoid memory leaks
  }, [imageIndex]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Update search text state as user types
  };

  const handleGreetingChange = (event) => {
    setGreeting(event.target.value); // Update greeting state as user types
  };

  const getGreetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return "Good morning";
    } else if (currentTime < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const sidebarStyles = {
    width: isOpen ? "20%" : "0", // Sidebar ka width 20% hai jab isOpen true hai
    height: "100%",
    backgroundColor: "#333",
    overflowX: "hidden",
    transition: "0.5s",
    position: "fixed", // Fixed position to keep sidebar always visible
    zIndex: 1 // Ensure sidebar stays above other content
  };

  const contentStyles = {
    marginLeft: isOpen ? "20%" : "0%", // Adjust content margin based on sidebar visibility
    transition: "0.5s",
    padding: "2px"
  };

  return (
    <Router> 
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px", backgroundColor:'#7DCEA0'}}>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>{greeting}</h1>
          <input type="text" placeholder="Search..." value={searchText} onChange={handleSearchChange} style={{ marginRight: "10px" }} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={sidebarStyles}>
            <ul style={{ padding: 0 }}>
              <li style={{ padding: "10px", color: "white" }}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
              </li>
              <li style={{ padding: "10px", color: "white" }}>
                <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>Admin</Link>
              </li>
              <li style={{ padding: "10px", color: "white" }}>
                <Link to="/fees" style={{ textDecoration: 'none', color: 'inherit' }}>Fees Management</Link>
              </li>
              <li style={{ padding: "10px", color: "white" }}>
                <Link to="/attendance" style={{ textDecoration: 'none', color: 'inherit' }}>Attendance Management</Link>
              </li>
              <li style={{ padding: "10px", color: "white" }}>
                <Link to="/staff" style={{ textDecoration: 'none', color: 'inherit' }}>Staff Management</Link>
              </li>
              <li style={{ padding: "10px", color: "white" }}>
                Student Management 
              </li>
              <li style={{ padding: "10px", color: "white" }}>
                <Link to="/academic" style={{ textDecoration: 'none', color: 'inherit' }}>Academic</Link>
              </li>
              <li style={{ padding: "10px", color: "white" }}>
                <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>Settings</Link>
              </li>
            </ul>
          </div>
          <div style={contentStyles}>
            {/* Content */}
            <div>
              <Routes>
                <Route path="/home" element={<h2>Home Content</h2>} />
                <Route path="/admin" element={<h2>Admin Content</h2>} />
                <Route path="/fees" element={<h2>Fees Management Content</h2>} />
                <Route path="/attendance" element={<h2>Attendance Management Content</h2>} />
                <Route path="/staff" element={<h2>Staff Management Content</h2>} />
                {/* Add other routes */}
                <Route path="/academic" element={<Certificate />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>   
      {/* Auto-scrolling image */}
      <div style={{ overflowX: "hidden", whiteSpace: "nowrap", position: "relative", width: "100%" }}>
        <div style={{ display: "inline-block", animation: "scrollRightToLeft 1s linear infinite" }}>
        <img src="/retail.jpg" alt="Retail" style={{ width: "50%", height: "20%" }} />
<img src="/scm.jpg" alt="SCM" style={{ width: "50%", height: "20%" }} />
<img src="/RETAILL.webp" alt="Retail" style={{ width: "50%", height: "20%" }} />

        </div>
      </div>
    </Router>
  );
};

export default HomePage;