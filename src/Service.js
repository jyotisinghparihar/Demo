import React from 'react';

const Service    = () => {
  return (
    <div style={{ fontSize: 'calc(1px + 2vmin)' }}>
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      
      <div>
      <div style={{ backgroundImage: "url('pic.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
    <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto', }}>
  <h1>Our Services</h1>
</div>
</div>
</div>
</div>
<div style={{fontSize:'19px'}}
        ><p>
        "At Bittwobyte Technologies Pvt. Ltd., our specialized services encompass data engineering, supply chain management (SCM), 
        cloud computing, and data analytics. With a focus on leveraging the latest technologies  
        and industry best practices, we provide tailored solutions to optimize your data infrastructure, streamline your supply chain operations, harness the
         power of cloud platforms, and unlock actionable insights from your data.<br></br> Partner with us to harness the full potential of your
          data and technology investments, driving sustainable growth and innovation for your organization."
        </p>

        </div>

<div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center', columnGap: '7px',marginTop:'30px'  ,backgroundColor:'#F2F3F4 ',}}>
<div style={{  marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
<a href="URL" style={{ textDecoration: "none" }}>    
<div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '50vmin', 
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
        backgroundImage:" url('data analytics.jpg')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '35%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
<div className="icon larger-icon" style={{ fontSize: '3em' }}>&#x1F6D2;</div>

<h3>Data Analytics </h3>
    <p> Unlock your data's potential with our advanced analytics solutions at BitTwoByte. Gain valuable insights to optimize operations and make informed decisions. Let our expert team guide you through the world of data analytics.</p>
</div>

</div>
</a>
</div>
<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
   <a href="URL" style={{ textDecoration: "none" }}>   
   <div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '50vmin', 
    padding: '40px', 
    fontSize: '14px', // Reduced font size
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
        backgroundImage:" url('scm.jpg')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '35%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
              <div className="icon larger-icon" style={{ fontSize: '3em' }}>&#128161;</div>

<h3>SCM </h3>

<p>
Transform your supply chain with our SCM solutions at BitTwoByte. Streamline operations, improve visibility, and enhance collaboration across your supply chain network.</p></div>

</div> 
</a>
</div>


<div style={{ padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center',  }}>
<a href="URL" style={{ textDecoration: "none" }}>     
<div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '50vmin', 
    padding: '40px', 
    fontSize: '14px', // Reduced font size
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
        backgroundImage:" url('cloud.jpg')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '35%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
              <div className="icon larger-icon" style={{ fontSize: '3em' }}>&#9729;</div>

<h3>Cloud Engineering </h3>
<p>


Elevate your business with our Cloud solutions at BitTwoByte. Harness the flexibility and scalability of cloud computing to optimize resources and drive innovation.</p>

</div>        
</div>                
</a>

     
</div>

<div style={{    padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
      
<a href="URL" style={{ textDecoration: "none" }}>     
    
<div className='Data-Exploration' style={{ 
    color: 'black', 
    height: 'auto', 
    width: '50vmin', 
    padding: '40px', 
    fontSize: '14px', // Reduced font size
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
        backgroundImage:" url('engeenring.wedp.webp')", // Specify image URL
        backgroundSize: 'cover', // Cover to fill the div
        backgroundPosition: 'center' // Center the image
    }}></div>
    <div style={{ 
        marginTop: '35%', // Move content below the image
        textAlign: 'center' // Center align the content
    }}> 
              <div className="icon larger-icon" style={{ fontSize: '3em' }}>&#127760;</div>

<h3>Data Engineering</h3>

<p> 

Maximize your data's efficiency with our Data Engineering solutions at BitTwoByte. Let us streamline your data processes and ensure seamless integration for enhanced performance.</p></div>
</div>
</a>
</div>









</div>





  </div>


  );
};
export default Service ;