import React, { useRef, useState } from 'react';

const Healthcare = () => {
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
      <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
        <div style={{ backgroundImage: "url('health.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '800px', textAlign: 'left', marginLeft: 'auto' }}>
            <h1>Healthcare</h1>
          </div>
        </div>
  
        <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)', fontStyle: 'normal' }}>
          <p>
            In today's rapidly evolving healthcare landscape, the demand for intelligent solutions to provide value-based care has never been higher. However, the efficacy of these solutions hinges on the effective management of healthcare data. Incorrect data management can impede the delivery of optimal care, leading to inefficiencies and suboptimal patient outcomes.
  
            At BITTWOBYTE, we specialize in providing comprehensive data management solutions tailored specifically for the healthcare industry. Our expertise spans the entire data lifecycle, from analysis and requirement gathering to data quality assurance, transformation, and cataloging. By leveraging cutting-edge technologies and industry best practices, we empower healthcare organizations to harness the full potential of their data to deliver on promises and drive meaningful outcomes.
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
        <path
            ref={pathRef1}
            d="M15.5 10.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM12 2C6 2 2 6 2 12s4 10 10 10 10-4 10-10S18 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
            strokeDasharray={isHovered1 ? "1000" : "0"} // Change strokeDasharray based on hover state
            strokeDashoffset={isHovered1 ? "0" : "1000"} // Change strokeDashoffset based on hover state
        />
    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered1 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3>Data Analysis</h3>
                <p>We employ advanced analytics techniques to extract actionable insights from healthcare data, enabling informed decision-making and proactive care management.</p>
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
        <path
            ref={pathRef2}
            d="M10 3v4M14 3v4M5 10h14M12 20v-4.5M7 15h10"
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
        <h3>Requirement Gathering </h3>
        <p> Our team works closely with stakeholders to understand their unique data needs and objectives, ensuring alignment with organizational goals.</p>
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
>
    {/* New icon: Data Transformation */}
    <path
    ref={pathRef3}
    d={isHovered3 ? "M10 4h4v16h-4zM6 4h4v16H6z M15 10h4v16h-4zM11 10h4v16h-4z" : "M10 4h4v16h-4zM6 4h4v16H6z M15 10h4v16h-4zM11 10h4v16h-4z"}
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
        <h3>Data Quality Assurance</h3>
                <p> We implement robust processes and protocols to maintain the integrity and accuracy of healthcare data, mitigating the risk of errors and inconsistencies.</p>
    </div>
</div>


   {/* fourth Box */}

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
        marginLeft: '50px', // Add margin between the boxes
        marginTop:'20px'
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
    d={isHovered4 ? "M6 4h12v16H6zM9 14h6M9 10h6M9 6h6" : "M6 4h12v16H6zM9 14h6M9 10h6M9 6h6"}
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
     <h3> Data Transformation</h3>
        <p> Leveraging state-of-the-art tools and methodologies, we streamline the transformation of raw data into valuable assets, optimizing interoperability and usability.</p>  </div>
</div>


   {/* five Box */}


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
        marginTop:'20px'
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
    {/* New icon: Data Transformation */}
    <path
    ref={pathRef5}
    d={isHovered5 ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M12 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z M12 17c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z" : "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M12 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z M12 17c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z"}
    strokeDasharray={isHovered5 ? "1000" : "0"} // Change strokeDasharray based on hover state
    strokeDashoffset={isHovered5 ? "0" : "1000"} // Change strokeDashoffset based on hover state
/>


</svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered3 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.7s ease', // Adding transition for smooth movement
    }}> 
       <h3>Data Cataloging</h3>
                <p> We establish comprehensive data catalogs that provide a centralized repository of healthcare data assets, facilitating easy discovery, access, and utilization.</p>
    </div>
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
    <h2>Deep Industry Understanding</h2>    </div>
    <div style={{ width:'50%' }}>
      <p>With years of experience in the healthcare sector, we possess a deep understanding of its unique challenges, regulations, and requirements.</p>
    </div>
  </div>
  
</div>



          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
          <h2>End-to-End Solutions</h2>
              <div style={{ width:'50%' }}>
              <p>From initial assessment to ongoing support, we offer end-to-end data management solutions tailored to your organization's specific needs and objectives.</p>
            </div> </div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
          <h2>Focus on Quality and Timeliness</h2>
              <div style={{width:'50%'}}> 
              <p>We prioritize quality delivery within promised timelines, ensuring that our solutions meet the highest standards of excellence and reliability.</p>
            </div></div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
            <h2>Innovation and Expertise</h2>
              <div style={{width:'50%'}}>
              <p>Our team of skilled professionals stays at the forefront of technological advancements and industry trends, continuously innovating to deliver best-in-class solutions.</p>
            </div></div>
          </div>


          <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
          <h1>Transform Your Healthcare Data with BITTWOBYTE</h1>
        <p>Unlock the true potential of your healthcare data and drive meaningful outcomes with BITTWOBYTE's comprehensive data management solutions. Contact us today to learn more about how we can help your organization thrive in the digital age of healthcare.</p>
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
export default Healthcare;