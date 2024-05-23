import React from 'react';

const LandingPage = () => {


  
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ backgroundColor: '#ABD0EB', display: 'flex', height: '10vh' }}>
        <div style={{ color: 'black', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'center' }}>
          <div className="icon larger-icon" style={{ fontSize: '36px' }}>💼  <h>Admin Portal</h></div>
        </div>
      </div>
     
    

      <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center' }}>
        {/* First Box */}
        <div 
          className='Data-Exploration' 
          style={{ 
            color: 'black', 
            height: 'auto', 
            width: '50vmin', 
            padding: '10px', 
            fontSize: '15px',
            borderBottom: '1px solid #02133805', 
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px', 
            background: 'linear-gradient(to right, #F4D03F, #E6E6FA)',
            position: 'relative',
            overflow: 'hidden' ,
            transition: 'background-color 0.3s ease', // Added transition for smooth color change
            marginLeft: '50px', // Add margin between the boxes
          }} 
        >
          <div className="icon larger-icon" style={{ fontSize: '36px' }}>💵</div>
          <h3>Fees management</h3>
        </div>

        {/* second Box */}
        <a
  href="/Attendancemanagent"
          className='Data-Exploration' 
          style={{ 
            color: 'black', 
            height: 'auto', 
            width: '50vmin', 
            padding: '10px', 
            fontSize: '15px',
            textDecoration:'none',
            borderBottom: '1px solid #02133805', 
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px',
            background: 'linear-gradient(to right, #A3E4D7, #E6E6FA)',
            position: 'relative',
            overflow: 'hidden' ,
            transition: 'background-color 0.3s ease', // Added transition for smooth color change
            marginLeft: '50px', // Add margin between the boxes
          }} 
        >
          <div className="icon larger-icon" style={{ fontSize: '36px' }}>✅</div>
          <h3>Attendance management</h3>
   
   </a>
        {/* third Box */} 
        <a
  href="/Account"
  className='Data-Exploration' 
  style={{ 
    color: 'black', 
    height: 'auto', 
    width: '50vmin', 
    padding: '10px', 
    fontSize: '15px',
    textDecoration:'none',
    borderBottom: '1px solid #02133805', 
    boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', 
    borderRadius: '10px', 
    background: 'linear-gradient(to right, #F8C471 , #E6E6FA)',
    position: 'relative',
    overflow: 'hidden' ,
    transition: 'background-color 0.3s ease', // Added transition for smooth color change
    marginLeft: '50px', // Add margin between the boxes
  }} 
>
  <div className="icon larger-icon" style={{ fontSize: '36px' }}>📒</div>
  <h3>Account management</h3>
  <div className="dropdown-content" style={{ position: 'absolute', backgroundColor: '#f9f9f9', minWidth: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: '1', display: 'none' }}>
    <a href="/AddVendor" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Add Vendor</a>
    <a href="/AddNewAccount" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Add New Account</a>
  </div>
</a>

        </div>
    

      <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center' }}>
        {/* fourth Box */}
        <div 
          className='Data-Exploration' 
          style={{ 
            color: 'black', 
            height: 'auto', 
            width: '50vmin', 
            padding: '10px', 
            fontSize: '15px',
            borderBottom: '1px solid #02133805', 
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px', 
            background: 'linear-gradient(to right, #85C1E9, #E6E6FA)',
            position: 'relative',
            overflow: 'hidden' ,
            transition: 'background-color 0.3s ease', // Added transition for smooth color change
            marginLeft: '50px', // Add margin between the boxes
          }} 
        >
          <div className="icon larger-icon" style={{ fontSize: '36px' }}>🧑‍🎓</div>
          <h3>Student management</h3>
        </div>
        {/* five Box */}
        <a
          href="/Staff"
          className='Data-Exploration' 
          style={{ 
            color: 'black', 
            height: 'auto', 
            width: '50vmin', 
            padding: '10px', 
            fontSize: '15px',
            textDecoration:'none',
            borderBottom: '1px solid #02133805', 
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px', 
            background: 'linear-gradient(to right, #E6B0AA , #E6E6FA)',
            position: 'relative',
            overflow: 'hidden' ,
            transition: 'background-color 0.3s ease', // Added transition for smooth color change
            marginLeft: '50px', // Add margin between the boxes
          }} 
        >
          <div className="icon larger-icon" style={{ fontSize: '36px' }}>👨‍💼👩‍💼</div>
          <h3>Staff management</h3>
 
 </a>
      </div>

      <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center' }}>
        {/* six Box */}
        <a
          href="/Acadmic" // Apne desired page ka URL yahan par specify karein
          className='Data-Exploration' 
          style={{ 
            color: 'black', 
            height: 'auto', 
            width: '50vmin', 
            padding: '10px', 
            fontSize: '15px',
            textDecoration:'none',
            borderBottom: '1px solid #02133805', 
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px', 
            background: 'linear-gradient(to right, #5D6D7E, #E6E6FA)',
            position: 'relative',
            overflow: 'hidden' ,
            transition: 'background-color 0.3s ease', // Added transition for smooth color change
            marginLeft: '50px', // Add margin between the boxes
          }} 
        >
          <div className="icon larger-icon" style={{ fontSize: '36px' }}>🎓</div>
          <h3>Academic management</h3>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
