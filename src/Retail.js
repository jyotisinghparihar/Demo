import React, { useRef, useState } from 'react';

const Retail = () => {
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

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
        <div style={{ backgroundImage: "url('RETAILL.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '900px', textAlign: 'left', marginLeft: 'auto' }}>
            <h1>Retail</h1>
          </div>
        </div>
  
  
        <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal' ,color:'#012353 ',textAlign:'center' }}>
  <h>Welcome to BITTWOBYTE: Empowering Retailers with Next-Level IT Solutions</h>
  </div>
  <div style={{ marginTop: '20px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)', fontStyle: 'normal' }}>
          <p>
          In today's dynamic retail landscape, globalization is reshaping the way businesses operate.
           As supply chains extend across borders and sales channels proliferate, retailers face the imperative to transform their IT capabilities. 
          At BITTWOBYTE, we understand the evolving needs of the retail sector and offer innovative solutions to address the challenges of modern retailing.
          </p>
        </div>
  
  
        <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
          <h1>Our Solutions</h1>
          <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '0 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center' }}>
  
          <p>At BITTWOBYTE, we specialize in providing comprehensive IT management solutions tailored to the unique requirements of retailers. 
              Our suite of services is designed to streamline operations, enhance efficiency, and drive growth. Here's how we help retailers overcome their IT challenges:</p>
              </div>
        </div>

            <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center' }}>
                {/* First Box */}
             
<div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '55vmin', 
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
            d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"
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
        <h3>End-to-End Data Management </h3>
                <p>Managing vast amounts of data efficiently is crucial for retailers to make informed decisions and stay competitive.
                     BITTWOBYTE offers end-to-end data management solutions that enable retailers to collect, process, and analyze data seamlessly across their entire organization. 
                    From inventory management to customer insights, our solutions empower retailers to harness the full potential of their data assets.</p>
    </div>
</div>

{/* second */}
<div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '55vmin', 
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
            d= "M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z M12 4l-1 3-3-1 1-3zm-8 5l3 1-1 3-3-1zm16 0l-3 1 1 3 3-1zm-2.09 7H6.09l-1.18 4.43 3.01.8.94-3.56h5.38l.94 3.56 3.01-.8-1.18-4.43z"
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
        <h3> Global Data Synchronization </h3>
        <p>In a globalized retail environment, maintaining consistency and accuracy in product information is essential.
             BITTWOBYTE's global data synchronization services ensure that retailers can synchronize product data seamlessly across multiple channels and geographies.
             By centralizing product information and standardizing data formats, we help retailers enhance visibility, reduce errors, and improve customer satisfaction. </p>
    </div>
</div>


                {/* Third Box */}
                <div 
    className='Data-Exploration' 
    style={{ 
        color: 'black', 
        height: 'auto', 
        width: '55vmin', 
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
    d={isHovered3 ? "M20 8v8H4V8h16m2-2H2v12h20V6z" : "M20 8v8H4V8h16m2-2H2v12h20V6z"}
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
        <h3>Data Security </h3>
                    <p>With cyber threats on the rise, safeguarding sensitive customer data is a top priority for retailers.
                        BITTWOBYTE offers robust data security solutions that protect retailers' IT infrastructure and assets from unauthorized access, breaches, and cyber attacks.
                        From encryption and access controls to threat detection and incident response, we implement comprehensive security measures to safeguard retailers' data and maintain regulatory compliance.</p>
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
    <h2>Expertise</h2>
    </div>
    <div style={{ width:'50%' }}>
      <p>With years of experience in the retail industry, we have deep domain expertise and a thorough understanding of retailers' IT needs.</p>
    </div>
  </div>
  
</div>



          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
          <h2>Innovation</h2>
              <div style={{ width:'50%' }}>
              <p> We leverage cutting-edge technologies and best practices to deliver innovative solutions that drive tangible results for our clients.</p>
            </div> </div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
          <h2>Reliability</h2>
              <div style={{width:'50%'}}> 
              <p> Our commitment to quality, reliability, and customer satisfaction sets us apart as a trusted partner for retailers worldwide.</p>
            </div></div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
            <h2>Scalability</h2>
              <div style={{width:'50%'}}>
              <p>Whether you're a small boutique or a multinational corporation, our solutions are scalable and adaptable to meet your evolving needs.</p>
            </div></div>
          </div>


          <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
          <h1>Transform Your Retail IT with BITTWOBYTE</h1>
        <p>In today's fast-paced retail environment, staying ahead requires agile, robust IT capabilities. Partner with BITTWOBYTE and unlock the full potential of your retail business. Contact us today to learn more about our solutions and how we can help you thrive in the digital age.</p>
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
export default Retail;