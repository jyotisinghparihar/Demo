import React from 'react';

const Industries    = () => {
  return (
    <div style={{ fontSize: 'calc(1px + 2vmin)' }}>
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      
      <div>
      <div style={{ backgroundImage: "url('industry.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
    <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto', }}>
  <h1>Our Industries</h1>
</div>
</div>
</div>
</div>

<div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center', columnGap: '1px',marginTop:'30px'  ,backgroundColor:'#F2F3F4 ',}}>
<div style={{  marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
<a href="URL" style={{ textDecoration: "none" }}>    
<div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '40vmin', 
    padding: '40px', 
    fontSize: '13px', // Reduced font size
    borderBottom: '1px solid #02133805', 
    background: 'linear-gradient(to right,#8d9db6,#667292 )',
    boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', // Corrected spelling of '5px'
    borderRadius: '40px', // Corrected property name for border radius
    transition: 'transform 0.2s ease-in-out', // Added transition for smooth effect
    cursor: 'pointer', // Added cursor pointer for hover effect
    position: 'relative', // Added relative positioning
    overflow: 'hidden' // Hide overflow content
}} 
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} // Zoom-in effect on hover
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Zoom-out effect on hover out
>
    <div style={{
        position: 'absolute', // Absolute positioning for image
        top: '0', // Align image to the top
        left: '0', // Align image to the left
        height: '40%', // Set height to half of the container
        width: '100%', // Set width to fill the container
        backgroundImage:" url('retail.jpg')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '42%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
<div className="icon larger-icon" style={{ fontSize: '3em' }}>&#x1F6D2;</div>

<h3>Retail Industry </h3>
    <p> Retail is about selling goods through stores, websites, and apps. It involves inventory management, customer service, and marketing.</p>
</div>

</div>
</a>
</div>
<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
   <a href="URL" style={{ textDecoration: "none" }}>   
   <div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '40vmin', 
    padding: '40px', 
    fontSize: '13px', // Reduced font size
    borderBottom: '1px solid #02133805', 
    background: 'linear-gradient(to right,#8d9db6,#667292 )',
    boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', // Corrected spelling of '5px'
    borderRadius: '40px', // Corrected property name for border radius
    transition: 'transform 0.2s ease-in-out', // Added transition for smooth effect
    cursor: 'pointer', // Added cursor pointer for hover effect
    position: 'relative', // Added relative positioning
    overflow: 'hidden' // Hide overflow content
}} 
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} // Zoom-in effect on hover
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Zoom-out effect on hover out
>
    <div style={{
        position: 'absolute', // Absolute positioning for image
        top: '0', // Align image to the top
        left: '0', // Align image to the left
        height: '40%', // Set height to half of the container
        width: '100%', // Set width to fill the container
        backgroundImage:" url('Media and entertainment.webp')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '42%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
<div className="icon larger-icon" style={{ fontSize: '3em' }}>&#x1F3A5;</div>

<h3>Media and Entertainment Industry </h3>

<p>
Media and entertainment encompass content creation, production, and distribution across TV, film, music, and digital platforms. Trends include  personalized content experiences.</p>
</div>

</div> 
</a>
</div>


<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center',  }}>
<a href="URL" style={{ textDecoration: "none" }}>     
<div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '40vmin', 
    padding: '40px', 
    fontSize: '13px', // Reduced font size
    borderBottom: '1px solid #02133805', 
    background: 'linear-gradient(to right,#8d9db6,#667292 )',
    boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', // Corrected spelling of '5px'
    borderRadius: '40px', // Corrected property name for border radius
    transition: 'transform 0.2s ease-in-out', // Added transition for smooth effect
    cursor: 'pointer', // Added cursor pointer for hover effect
    position: 'relative', // Added relative positioning
    overflow: 'hidden' // Hide overflow content
}} 
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} // Zoom-in effect on hover
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Zoom-out effect on hover out
>
    <div style={{
        position: 'absolute', // Absolute positioning for image
        top: '0', // Align image to the top
        left: '0', // Align image to the left
        height: '40%', // Set height to half of the container
        width: '100%', // Set width to fill the container
        backgroundImage:" url('banking.jpg')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '42%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
<div className="icon larger-icon" style={{ fontSize: '3em' }}>&#x1F4B0;</div>

<h3>Banking Industry </h3>
<p>


Banking offers financial services like deposits, playing a vital role in the economy. Digital banking is reshaping the industry with a focus on mobile, online payments.</p>

</div>        
</div>                
</a>

     
</div>

<div style={{    padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
      
<a href="URL" style={{ textDecoration: "none" }}>     
    
<div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '40vmin', 
    padding: '40px', 
    fontSize: '13px', // Reduced font size
    borderBottom: '1px solid #02133805', 
    background: 'linear-gradient(to right,#8d9db6,#667292 )',
    boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', // Corrected spelling of '5px'
    borderRadius: '40px', // Corrected property name for border radius
    transition: 'transform 0.2s ease-in-out', // Added transition for smooth effect
    cursor: 'pointer', // Added cursor pointer for hover effect
    position: 'relative', // Added relative positioning
    overflow: 'hidden' // Hide overflow content
}} 
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} // Zoom-in effect on hover
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Zoom-out effect on hover out
>
    <div style={{
        position: 'absolute', // Absolute positioning for image
        top: '0', // Align image to the top
        left: '0', // Align image to the left
        height: '40%', // Set height to half of the container
        width: '100%', // Set width to fill the container
        backgroundImage:" url('healthcare.jpg')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '42%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
<div className="icon larger-icon" style={{ fontSize: '3em' }}>&#x2695;</div>

<h3>Healthcare Industry</h3>

<p> 

Healthcare encompasses services across hospitals, clinics, pharmaceuticals, medical devices, insurance, and telemedicine. Challenges include rising costs, and rapid technological advancements.</p></div>
</div>
</a>
</div>






<div style={{  padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center',  }}>
<a href="URL" style={{ textDecoration: "none" }}>     
  
<div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '40vmin', 
    padding: '40px', 
    fontSize: '13px', // Reduced font size
    borderBottom: '1px solid #02133805', 
    background: 'linear-gradient(to right,#8d9db6,#667292 )',
    boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)', // Corrected spelling of '5px'
    borderRadius: '40px', // Corrected property name for border radius
    transition: 'transform 0.2s ease-in-out', // Added transition for smooth effect
    cursor: 'pointer', // Added cursor pointer for hover effect
    position: 'relative', // Added relative positioning
    overflow: 'hidden' // Hide overflow content
}} 
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} // Zoom-in effect on hover
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Zoom-out effect on hover out
>
    <div style={{
        position: 'absolute', // Absolute positioning for image
        top: '0', // Align image to the top
        left: '0', // Align image to the left
        height: '40%', // Set height to half of the container
        width: '100%', // Set width to fill the container
        backgroundImage:" url('manufacturing.jpg')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '42%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
<div className="icon larger-icon" style={{ fontSize: '3em' }}>&#x1F3ED;</div>

<h3>Manufacturing Industry </h3>
<p>


Manufacturing creates goods through processes like machining and assembly in sectors like automotive and electronics. Challenges include managing globalization impacts and environmental sustainability.</p></div>        
</div>                
</a>

     
</div>


</div>





  </div>


  );
};
export default Industries ;