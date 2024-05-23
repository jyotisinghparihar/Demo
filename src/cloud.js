import React, { useRef, useState } from 'react';
const Cloud = () => {
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const pathRef4 = useRef(null);
    const pathRef5 = useRef(null);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);

    const handleMouseEnter = (e, pathRef, setIsHovered) => {
        setIsHovered(true);
        e.currentTarget.style.background = 'linear-gradient(135deg, #43e794 , #012353)';
        const path = pathRef.current;
        if (path) {
            path.style.transition = 'none'; // Disable transition for continuous drawing
            path.style.strokeDashoffset = '1000'; // Reset strokeDashoffset to its initial value
            setTimeout(() => {
                path.style.transition = 'stroke-dashoffset 4.5s ease-in-out'; // Re-enable transition after a short delay
                path.style.strokeDashoffset = '0'; // Start drawing animation
            }, 50); // Short delay to ensure transition is disabled before resetting strokeDashoffset
        }
    };

    const handleMouseLeave = (e, pathRef, setIsHovered) => {
        setIsHovered(false);
        e.currentTarget.style.background = 'linear-gradient(#CBC3E3, #E6E6FA)';
        const path = pathRef.current;
        if (path) {
            path.style.transition = 'stroke-dashoffset 0.5s ease-in-out';
            path.style.strokeDashoffset = '1000';
        }
    };

    return (
        <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' ,width:'auto'}}>
            <div style={{ 
                backgroundImage: "url('Data Analysis.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                height: '60vh',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column' 
            }}>
                <div style={{ color: 'black', fontSize: 'calc(12px + 3vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto',  }}>
                    <h1>Cloud Service</h1>
                </div>
            </div>
            <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal' ,color:'#012353 ',textAlign:'center' }}>
<h>Empower Your Business with Bittwobyte Technologies Pvt. Ltd

</h>
</div>
<div style={{ marginTop: '20px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)', fontStyle: 'normal' }}>
        <p>
        Elevate your business operations with Bittwobyte Technologies Pvt. Ltd.'s innovative cloud solutions. Our comprehensive suite of cloud services enables seamless scalability, enhanced collaboration, and improved 
                    efficiency. From cloud migration and infrastructure management to data storage and security, we offer tailored solutions to meet your unique business needs. With Bittwobyte's expertise in cloud technology,
                    businesses can unlock new opportunities, reduce costs, and accelerate growth. Experience the agility, flexibility, and reliability of cloud computing with Bittwobyte Technologies Pvt. Ltd.
                </p>
      </div>


      <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
        <h1>Our Services</h1>
        
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
        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
        position: 'relative',
        overflow: 'hidden' ,
        transition: 'background-color 0.3s ease', // Added transition for smooth color change
        marginLeft: '50px', // Add margin between the boxes
    }} 
    onMouseEnter={(e) => handleMouseEnter(e, pathRef1, setIsHovered1)} 
    onMouseLeave={(e) => handleMouseLeave(e, pathRef1, setIsHovered1)}
>
    <svg
        className="draw-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Replace the path with the SVG data for the desired icon (data mining) */}
        <path
    ref={pathRef1}
    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1.5-11H15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5zm-3.5 0H11c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-3.5 0H7c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z"    strokeDasharray={isHovered1 ? "1000" : "0"}
    strokeDashoffset={isHovered1 ? "0" : "1000"}
/>

    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered1 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3>Cloud Migration</h3>
        <p>Seamlessly transition your applications and data to the cloud with our expert migration services.</p>
    </div>
</div>


                {/* Second Box */}
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
        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
        position: 'relative',
        overflow: 'hidden' ,
        transition: 'background-color 0.3s ease', // Added transition for smooth color change
        marginLeft: '50px', // Add margin between the boxes
    }} 
    onMouseEnter={(e) => handleMouseEnter(e, pathRef2, setIsHovered2)} 
    onMouseLeave={(e) => handleMouseLeave(e, pathRef2, setIsHovered2)}
>
    <svg
        className="draw-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Replace the path with the SVG data for the chart-monotone icon */}
        <path
                            ref={pathRef2}
                            d="M20 4h-4V2h-4v2H8V2H4v2H0v18h24V4h-4zM4 18V8h4v10H4zm6 0V8h4v10h-4zm6 0V8h4v10h-4z"                            strokeDasharray={isHovered2 ? "1000" : "0"}
                            strokeDashoffset={isHovered2 ? "0" : "1000"}
                        />

    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered2 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3>Infrastructure Managemen</h3>
        <p>Optimize your cloud infrastructure for performance, scalability, and cost-efficiency.</p>
    </div>
</div>


                {/* Third Box */}
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
        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
        position: 'relative',
        overflow: 'hidden' ,
        transition: 'background-color 0.3s ease', // Added transition for smooth color change
        marginLeft: '50px', // Add margin between the boxes
    }} 
    onMouseEnter={(e) => handleMouseEnter(e, pathRef3, setIsHovered3)} 
    onMouseLeave={(e) => handleMouseLeave(e, pathRef3, setIsHovered3)}
>
    <svg
        className="draw-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    ><path
    ref={pathRef3}
    d="M21 6H3c-1.1 0-1.99.9-1.99 2L1 18c0 1.1.89 2 1.99 2H21c1.1 0 2-.9 2-2V8c0-1.1-.89-2-2-2zm0 12H3V8h18v10z"
    strokeDasharray={isHovered3 ? "1000" : "0"} // Change strokeDasharray based on hover state
    strokeDashoffset={isHovered3 ? "0" : "1000"} // Change strokeDashoffset based on hover state
/>

    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered3 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.7s ease', // Adding transition for smooth movement
    }}> 
        <h3>Data Storage</h3>
        <p>Securely store and manage your data in the cloud, ensuring accessibility and reliability.</p>
    </div>
</div>


  {/*fourth Box */} 

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
        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
        position: 'relative',
        overflow: 'hidden' ,
        transition: 'background-color 0.3s ease', // Added transition for smooth color change
        marginLeft: '20px', // Add margin between the boxes
        marginTop: '30px' // Add margin top for spacing
    }}
    onMouseEnter={(e) => handleMouseEnter(e, pathRef4, setIsHovered4)} 
    onMouseLeave={(e) => handleMouseLeave(e, pathRef4, setIsHovered4)}
>
    <svg
        className="draw-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path
            ref={pathRef4}
            d="M21 6H3c-1.1 0-1.99.9-1.99 2L1 18c0 1.1.89 2 1.99 2H21c1.1 0 2-.9 2-2V8c0-1.1-.89-2-2-2zm0 12H3V8h18v10z"
            strokeDasharray={isHovered4 ? "1000" : "0"} // Change strokeDasharray based on hover state
            strokeDashoffset={isHovered4 ? "0" : "1000"} // Change strokeDashoffset based on hover state
        />
    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered4 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3>
           Security Solutions {/* Replace 'FaChartLine' with the desired Font Awesome icon */}
        </h3>
        <p>Protect your cloud environment with advanced security measures, including encryption, access.</p>
    </div>
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
        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
        position: 'relative',
        overflow: 'hidden' ,
        transition: 'background-color 0.3s ease', // Added transition for smooth color change
        marginLeft: '50px', // Add margin between the boxes
        marginTop: '30px' // Add margin top for spacing
    }} 
    onMouseEnter={(e) => handleMouseEnter(e, pathRef5, setIsHovered5)} 
    onMouseLeave={(e) => handleMouseLeave(e, pathRef5, setIsHovered5)}
>
    <svg
        className="draw-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
      <path
      ref={pathRef5}
      d="M19.89,9.29l-7.1-7.11c-0.39-0.39-1.02-0.39-1.41,0l-7.1,7.11c-0.39,0.39-0.39,1.02,0,1.41l7.1,7.11c0.39,0.39,1.02,0.39,1.41,0l7.1-7.11C20.28,10.31,20.28,9.68,19.89,9.29z M12,16.01c-0.53,0-0.96-0.43-0.96-0.96s0.43-0.96,0.96-0.96s0.96,0.43,0.96,0.96 S12.53,16.01,12,16.01z"

         strokeDasharray={isHovered5 ? "1000" : "0"} 
        strokeDashoffset={isHovered5 ? "0" : "1000"}  />
    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered5 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3>Collaboration Tools</h3>
        <p>Facilitate seamless collaboration and communication with cloud-based productivity.</p>
    </div>
</div>




                <div style={{ backgroundSize: '10px' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Why Choose Us for Data Analytics?</h1>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}>
  
  <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
    <div>
      <h2>Proven Expertise</h2>
    </div>
    <div style={{ width:'50%' }}>
      <p>Benefit from our extensive experience and expertise in cloud technology implementation and management.</p>
    </div>
  </div>
  
</div>



          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Tailored Solutions </h2>
              <div style={{ width:'50%' }}>
              <p>Receive customized cloud solutions tailored to your specific business requirements and objectives.</p>
            </div> </div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Cost Optimization</h2>
              <div style={{width:'50%'}}> 
              <p>Maximize cost savings with our efficient cloud solutions, optimizing resource utilization and minimizing expenses.</p>
            </div></div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Scalability and Flexibility</h2>
              <div style={{width:'50%'}}>
              <p>Scale your infrastructure up or down according to your evolving business needs, ensuring flexibility and agility.</p>
            </div></div>
          </div>


         
          <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
          Elevate your business with Bittwobyte Technologies Pvt. Ltd.'s cloud solutions.
                    From cloud migration and infrastructure management to data storage and security,
                    our comprehensive offerings enable seamless scalability, enhanced collaboration, 
                    and improved efficiency. Unlock the power of cloud computing to drive innovation and growth.
                    Contact us now to learn more about our tailored cloud solutions and take your business to new heights.
 <div style={{ textAlign: 'center' }}>
              <button 
                style={{ 
                  padding: '10px 5px', // Adjust padding for button size
                  fontSize: '19px', // Adjust font size for button text
                  backgroundColor: 'white', 
                  color: 'black',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transitionDuration: '0.2s',
                  border: 'none', // Remove border
                  fontStyle:'bold'
                }}
                // Adding hover effect
                onMouseOver={(e) => { e.target.style.backgroundColor = 'lightblue'; }}
                onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; }}
              >
                Let's Talk
               
                
              </button>
            </div>
          </div>
        </div>
    </div>
    </div>
   
  );
};


export default Cloud;
