import React, { useRef, useState } from 'react';

const Banking = () => {
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const pathRef4 = useRef(null);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

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
      <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ backgroundImage: "url('banking.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ color: '#012353', fontSize: 'calc(12px + 3vmin)', marginRight: '600px', textAlign: 'left', marginLeft: 'auto', }}>
    <h1>Banking </h1>
  </div>
  
        </div>
  
        <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)',fontStyle:'forum '  }}>
          <p>
          At BITTWOBYTE, we understand the pivotal role that Information Technology plays in the banking sector. As technology continues to evolve,
           it has become imperative for banking institutions to embrace innovative IT solutions to enhance their services and stay ahead in the competitive market.
          </p>
        </div>
  
        <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
          <h1>Our Services</h1>
        </div>
  
        <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)',fontStyle:'forum '  }}>
          <p>
          BITTWOBYTE specializes in providing a comprehensive IT environment tailored specifically for banking institutions. Our range of services includes:
          </p>
        </div>

            <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center' }}>
                {/* First Box */}
             
<div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '40vmin', 
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
        <path
            ref={pathRef1}
            d="M12 21c5.5 0 10-4.5 10-10S17.5 1 12 1 2 5.5 2 11s4.5 10 10 10zm0-18c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-4 6h8v1H8zm0 2h8v1H8zm0 2h4v1H8z"            strokeDasharray={isHovered1 ? "1000" : "0"} // Change strokeDasharray based on hover state
            strokeDashoffset={isHovered1 ? "0" : "1000"} // Change strokeDashoffset based on hover state
        />
    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered1 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3> Product Development </h3>
        <p> Product Development: Our team of highly skilled technical and functional experts collaborates with banking institutions to develop cutting-edge products and solutions tailored to their unique needs. From conceptualization to implementation, we ensure that our clients have access to the latest technological advancements.</p>
    </div>
</div>

{/* second */}
<div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '40vmin', 
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
        <path
            ref={pathRef2}
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-12h-2v6h2v-6z"
            strokeDasharray={isHovered2 ? "1000" : "0"} // Change strokeDasharray based on hover state
            strokeDashoffset={isHovered2 ? "0" : "1000"} // Change strokeDashoffset based on hover state
        />
    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered2 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3> Data Management </h3>
        <p>  In today's data-driven world, effective data management is crucial for banking institutions to make informed decisions and provide personalized services to their customers. BITTWOBYTE offers robust data management solutions that help banks organize, analyze, and secure their data efficiently.</p>
    </div>
</div>


                {/* Third Box */}
                <div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '40vmin', 
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
>
    {/* New icon: Data Transformation */}
    <path
    ref={pathRef3}
    d={isHovered3 ? "M19 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1 7h-4v4h4v-4z" : "M19 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1 7h-4v4h4v-4z"}
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
         <h3>Technical and Functional Resources </h3>
        <p>  At BITTWOBYTE, we pride ourselves on our team of talented professionals who possess a deep understanding of both technical and functional aspects of banking IT. Whether it's software development, system integration, or business analysis, our experts are equipped with the skills and knowledge to meet our clients' requirements.</p>
    </div>
</div>


<div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '40vmin', 
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
    d={isHovered4 ?  "M10 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4v-2h4V6h-4v1H8V6H4v12h4v2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4v2H6v8h4v-1h8v1h4V4h-4V2z" : "M10 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4v-2h4V6h-4v1H8V6H4v12h4v2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4v2H6v8h4v-1h8v1h4V4h-4V2z"}
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
    <h3> Technology Solutions </h3>
        <p>  We leverage the latest technologies such as artificial intelligence, machine learning, blockchain, and cloud computing to develop innovative solutions that drive operational efficiency, enhance customer experience, and ensure regulatory compliance for banking institutions.</p>  </div>
</div>







                <div style={{ backgroundSize: '10px' }}>
          <div style={{ textAlign: 'center' }}>
          <h1> Why Choose BITTWOBYTE?</h1>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}>
  
  <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
    <div>
    <h2>Expertise</h2>
    </div>
    <div style={{ width:'50%' }}>
      <p > With years of experience in the banking IT sector, we have a proven track record of delivering high-quality solutions that exceed our clients' expectations.</p>
    </div>
  </div>
  
</div>



          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h2>Customization</h2>
              <div style={{ width:'50%' }}>
              <p>We understand that every banking institution is unique, which is why we offer customizable solutions tailored to specific requirements and objectives.</p>
            </div> </div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h2>Security</h2>
              <div style={{width:'50%'}}> 
              <p>Security is paramount in the banking industry, and we prioritize the implementation of robust security measures to safeguard sensitive data and protect against cyber threats.</p>
            </div></div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
            <h2>Client Satisfaction</h2>
              <div style={{width:'50%'}}>
              <p>Our commitment to client satisfaction is unwavering, and we strive to build long-lasting partnerships based on trust, transparency, and mutual success.</p>
            </div></div>
          </div>


          <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
          <h1>Get in Touch with BITTWOBYTE</h1>
            <p>Ready to take your banking institution to the next level with our IT services?
                 Contact us today to learn more about how BITTWOBYTE can help you achieve your goals.</p>
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
export default Banking;
