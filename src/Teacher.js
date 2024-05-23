import React from 'react';


const Teacher = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ backgroundColor: '#ABD0EB', display: 'flex', height: '10vh' }}>
        <div style={{ color: 'black', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'center' }}>
        <div className="icon larger-icon" style={{ fontSize: '36px' }}>👨‍🏫👩‍🏫  <h>TEACHER PORTAL</h></div>
         
        </div>
      </div>
     
      <div style={{ color: 'black', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'center' }}>
        <h3>Dashboard</h3>
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
        fontSize: '20px',
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
  
<div className="icon larger-icon" style={{ fontSize: '56px' }}>💵</div>

  
        <h3>Fees management</h3>
    </div>

  {/* second Box */}
  <div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '50vmin', 
        padding: '10px', 
        fontSize: '20px',
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
  
<div className="icon larger-icon" style={{ fontSize: '56px' }}>✅</div>

  
        <h3>Attendance management</h3>
    </div>


 {/* third Box */} 
    <div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '50vmin', 
        padding: '10px', 
        fontSize: '20px',
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
  
<div className="icon larger-icon" style={{ fontSize: '56px' }}>🧑‍🎓</div>

  
        <h3>Student management</h3>
    </div>
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
        fontSize: '20px',
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
  
<div className="icon larger-icon" style={{ fontSize: '56px' }}>🎓</div>

  
        <h3>Academic management</h3>
    </div>
 {/* five Box */}
    <div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '50vmin', 
        padding: '10px', 
        fontSize: '20px',
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
  
<div className="icon larger-icon" style={{ fontSize: '56px' }}>👨‍💼👩‍💼</div>

  
        <h3>Staff management</h3>
    </div>


    </div>


   



</div>


  );
};

export default Teacher;
