import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const Main = () => {
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Adjust interval duration as needed

    return () => clearInterval(interval);
  }, [contentIndex]);

  const content = [
    { type: "image", url: "school3.webp" },
    { type: "image", url: "meting.jpg" },
    { type: "image", url: "teacher.jpg" },
    { type: "image", url: "Content Management Systems.jpg" }, // Corrected file extension
  ];

  // Duplicate the first image at the end of the content array
  const extendedContent = [...content, content[0]];

  return (
    <div>
      <Navbar bg="white" variant="white" expand="lg" fixed="top" style={{ borderBottom: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#attendance">Attendance</Nav.Link>
            <Nav.Link href="#fees">Fees</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content" style={{ width: "100%", height: "60vh", overflow: "hidden", marginTop: '56px' }}>
        <div
          style={{
            width: `${extendedContent.length * 100}%`,
            height: "100%",
            display: "flex",
            transition: "transform 8s ease", // Adjust transition duration
            transform: `translateX(-${contentIndex * (100 / extendedContent.length)}%)`,
          }}
        >
          {extendedContent.map((item, index) => (
            <div key={index} style={{ width: `${100 / extendedContent.length}%` }}>
              {item.type === "image" && (
                <img
                  src={item.url}
                  alt=""
                  className="img-fluid mb-3"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="boxes" style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", columnGap: '7px' }}>
        <div className="box" style={{ flex: 1, backgroundColor: "lightblue", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}>
          <h3 style={{ margin: 0 }}>About Us</h3>
          <p style={{ fontSize: "1rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros non metus fringilla tincidunt.</p>
        </div>
        <div className="box" style={{ flex: 1, backgroundColor: "lightblue", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}>
          <h3 style={{ margin: 0 }}>Achievement</h3>
          <p style={{ fontSize: "1rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros non metus fringilla tincidunt.</p>
        </div>
        <div className="box" style={{ flex: 1, backgroundColor: "lightblue", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}>
          <h3 style={{ margin: 0 }}>Academic Activities</h3>
          <p style={{ fontSize: "1rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros non metus fringilla tincidunt.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
