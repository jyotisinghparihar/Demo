import React, { useRef, useState } from 'react';

const DataEngineering = () => {
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
            <div style={{ backgroundImage: "url('dataengineering.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto', }}>
          <h1>Data Engineering</h1>
        </div>
        
              </div>
        
              <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)',fontStyle:'forum '  }}>
                <p>
                Unleash the potential of your business with Bittwobyte Technologies Pvt. Ltd.'s innovative data engineering solutions.
                 Our comprehensive suite of data engineering tools and services is designed to streamline data processes, optimize data pipelines, and maximize the value of your data assets.
                  From data ingestion and storage to data transformation and integration, our expert team specializes in building robust data architectures tailored to your specific needs.
                </p>
              </div>
        
              <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
                <h1>Our Data Engineering Solutions</h1>
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
            d="M18 2h-5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2H2v20h16V2zm-7-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H11z"
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
        <h3>Data Ingestion</h3>
        <p>Seamlessly collect data from various sources, including databases, APIs, and streaming platforms, to fuel your analytics initiatives.</p>
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
            d="M5 6v12h14V6H5zm4 4h6M9 10h6M9 14h6"
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
        <h3>Data Storage</h3>
        <p>Design and implement scalable and reliable data storage solutions, such as data lakes and data warehouses, to accommodate growing volumes of data.</p>
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
    d={isHovered3 ? "M10 4h4v16h-4zM6 4h4v16H6z" : "M10 4h4v16h-4zM6 4h4v16H6z"}
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
        <h3>Data Transformation</h3>
        <p>Convert, manipulate, and refine raw data to unlock its full potential through robust transformation processes and ETL (Extract, Transform, Load) workflows.</p>
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
    d={isHovered4 ? "M12 5v5l7 2-7 2v5" : "M12 5v5l7 2-7 2v5"}
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
    <h3>Data Integration</h3>

    <p> 
Integrate disparate data sources and systems to create a unified view of your data landscape, enabling cross-functional analysis and reporting.
</p>    </div>
</div>







                <div style={{ backgroundSize: '10px' }}>
          <div style={{ textAlign: 'center' }}>
          <h1> Why Choose Us for Data Engineering?</h1>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}>
  
  <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
    <div>
    <h2>Expertise</h2>
    </div>
    <div style={{ width:'50%' }}>
      <p>Our team of experienced data engineers possesses deep expertise in designing and implementing cutting-edge data engineering solutions.</p>
    </div>
  </div>
  
</div>



          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h2>Scalability</h2>
              <div style={{ width:'50%' }}>
              <p>We prioritize scalability and flexibility in our data architectures, ensuring they can accommodate your evolving business needs and data growth.</p>
            </div> </div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h2>Reliability</h2>
              <div style={{width:'50%'}}> 
              <p>We build robust data pipelines and architectures that prioritize data integrity, reliability, and security, providing peace of mind for your data-driven initiatives.</p>
            </div></div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
            <h2>Seamless Integration</h2>
              <div style={{width:'50%'}}>
              <p>We stay abreast of the latest trends and technologies in data engineering, allowing us to deliver innovative solutions that drive business value.</p>
            </div></div>
          </div>


          <div style={{ marginTop: '30px', backgroundColor: '#73C6B6', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
            <p>Harness the power of data engineering with Bittwobyte Technologies Pvt. Ltd.'s comprehensive solutions.
               Whether you're looking to modernize your data infrastructure, optimize data workflows, or unlock the full potential of your data assets, our expert team is here to help.
               Contact us today to learn more about how our data engineering solutions can accelerate your journey to data-driven success.</p>
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
export default DataEngineering;