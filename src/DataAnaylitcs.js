import React, { useRef, useState } from 'react';

const HoverBox = () => {
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
            <div style={{ 
                backgroundImage: "url('home.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                height: '60vh',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column' 
            }}>
                <div style={{ color: 'green', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto',  }}>
                    <h1>Data Analytics <br></br>& Intelligence</h1>
                </div>
            </div>
                
            <div style={{ marginTop: '50px', fontSize: '20px', height: 'auto' }}>
                <p>
                    Unlock the Power of Your Data with Our Advanced Analytics Solutions
                    At BitTwoByte, we understand the critical role that data plays in today's business landscape. <br />
                    Our Data Analytics services empower organizations to harness the full potential of their data, transforming raw information into valuable insights.<br />
                    Whether you're looking to optimize operations, improve decision-making processes, or gain a competitive edge, our expert team is here to guide you through the world of data analytics.
                </p>
            </div>
           
            <div style={{  marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal' ,color:'#012353 ',textAlign:'center' }}>
                <h2>Our Data Analytics Capabilities</h2>
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
                        marginLeft: '30px', // Add margin between the boxes
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            ref={pathRef1}
                            d="M5 12h14M12 5l7 7-7 7"
                            strokeDasharray="1000"
                            strokeDashoffset="1000"
                        />
                    </svg>

                    <div style={{ 
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered1 ? '-14px' : '0', // Adjust the value to move the text up or down
                        transition: 'top 0.3s ease', // Adding transition for smooth movement
                    }}> 
                        <h3>Retail Industry</h3>
                        <p>Retail is about selling goods through stores, websites, and apps. It involves inventory management, customer service, and marketing.</p>
                    </div>
                </div>

                {/* Second Box */}
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            ref={pathRef2}
                            d="M5 12h14M12 5l7 7-7 7"
                            strokeDasharray="1000"
                            strokeDashoffset="1000"
                        />
                    </svg>

                    <div style={{ 
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered2 ? '-14px' : '0', // Adjust the value to move the text up or down
                        transition: 'top 0.3s ease', // Adding transition for smooth movement
                    }}> 
                        <h3>Finance Sector</h3>
                        <p>Finance is about managing money, including activities such as investing, borrowing, lending, budgeting, and forecasting.</p>
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            ref={pathRef3}
                            d="M5 12h14M12 5l7 7-7 7"
                            strokeDasharray="1000"
                            strokeDashoffset="1000"
                        />
                    </svg>

                    <div style={{ 
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered3 ? '-14px' : '0', // Adjust the value to move the text up or down
                        transition: 'top 0.3s ease', // Adding transition for smooth movement
                    }}> 
                        <h3>Technology Sector</h3>
                        <p>The technology sector consists of businesses that develop, manufacture, or market computer-related products and services.</p>
                    </div>
                </div>

                {/* Fourth Box */}
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            ref={pathRef4}
                            d="M5 12h14M12 5l7 7-7 7"
                            strokeDasharray="1000"
                            strokeDashoffset="1000"
                        />
                    </svg>

                    <div style={{ 
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered4 ? '-14px' : '0', // Adjust the value to move the text up or down
                        transition: 'top 0.3s ease', // Adding transition for smooth movement
                    }}> 
                        <h3>Healthcare Industry</h3>
                        <p>The healthcare industry is involved in the diagnosis, treatment, and prevention of disease, illness, injury, and other physical and mental impairments in humans.</p>
                    </div>
                </div>

                {/* Fifth Box */}
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
                        marginLeft: '30px', // Add margin between the boxes
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            ref={pathRef5}
                            d="M5 12h14M12 5l7 7-7 7"
                            strokeDasharray="1000"
                            strokeDashoffset="1000"
                        />
                    </svg>

                    <div style={{ 
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered5 ? '-14px' : '0', // Adjust the value to move the text up or down
                        transition: 'top 0.3s ease', // Adding transition for smooth movement
                    }}> 
                        <h3>E-commerce Sector</h3>
                        <p>The e-commerce sector involves buying and selling goods and services over the internet, making transactions easier and more convenient for consumers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoverBox;




























import React, { useRef, useState } from 'react';

const HoverBox = () => {
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
            <div style={{ 
                backgroundImage: "url('home.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                height: '60vh',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column' 
            }}>
                <div style={{ color: 'green', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto',  }}>
                    <h1>Data Analytics <br></br>& Intelligence</h1>
                </div>
            </div>
                
            <div style={{ marginTop: '50px', fontSize: '20px', height: 'auto' }}>
                <p>
                    Unlock the Power of Your Data with Our Advanced Analytics Solutions
                    At BitTwoByte, we understand the critical role that data plays in today's business landscape. <br />
                    Our Data Analytics services empower organizations to harness the full potential of their data, transforming raw information into valuable insights.<br />
                    Whether you're looking to optimize operations, improve decision-making processes, or gain a competitive edge, our expert team is here to guide you through the world of data analytics.
                </p>
            </div>
           
            <div style={{  marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal' ,color:'#012353 ',textAlign:'center' }}>
                <h2>Our Data Analytics Capabilities</h2>
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
        marginLeft: '30px', // Add margin between the boxes
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Replace the path with the SVG data for the desired icon (data mining) */}
        <path
            ref={pathRef1}
            d="M12 14l9-5-9-5-9 5 9 5z"
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
        <h3>Data Exploration and Visualization</h3>
        <p>Navigate through your data with ease using our advanced exploration and visualization. We help you uncover patterns, trends, and outliers, providing a clear and comprehensive view of your data landscape.</p>
    </div>
</div>


                {/* Second Box */}
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Replace the path with the SVG data for the chart-monotone icon */}
        <path
            ref={pathRef2}
            d="M21 6.75v10.5M17.25 19.5V4.5M12 17.25V2.25M7.5 14.25v-8.5M3 12h18"
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
        <h3>Predictive Analytics</h3>
        <p>Stay ahead of the curve by leveraging predictive analytics. Our models analyze historical data to forecast future trends, enabling you to make informed decisions and proactively respond to changing market conditions.</p>
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* New icon: Bar chart */}
        <rect x="4" y="4" width="16" height="16" />
        {/* Drawing effect */}
        <polyline 
            points={isHovered3 ? "12 6 12 12 16 14" : "12 6 12 6 12 6"}
            style={{
                strokeDasharray: "100",
                strokeDashoffset: isHovered3 ? "0" : "100",
                transition: "stroke-dashoffset 1s ease",
            }}
        />
    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered3 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.7s ease', // Adding transition for smooth movement
    }}> 
        <h3>Real-time Analytics</h3>
        <p>React promptly to changing conditions with our real-time analytics capabilities. Monitor key metrics in real-time, enabling quick and agile decision-making to capitalize on emerging opportunities.</p>
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
        marginLeft: '50px', // Add margin between the boxes
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path
            ref={pathRef4}
            d="M5 12h5l2 7 2-7h5"
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
           Data Mining {/* Replace 'FaChartLine' with the desired Font Awesome icon */}
        </h3>
        <p>Unearth hidden knowledge within your data through our data mining expertise. Identify patterns, correlations, and valuable information that may be overlooked, driving strategic decision-making.</p>
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
        marginLeft: '30px', // Add margin between the boxes
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" strokeDasharray={isHovered5 ? "1000" : "0"} strokeDashoffset={isHovered5 ? "0" : "1000"} ref={pathRef5} />
    </svg>

    <div style={{ 
        textAlign: 'center',
        position: 'relative',
        top: isHovered5 ? '-14px' : '0', // Adjust the value to move the text up or down
        transition: 'top 0.3s ease', // Adding transition for smooth movement
    }}> 
        <h3>Prescriptive Analytics</h3>
        <p>Move beyond predicting outcomes with our prescriptive analytics solutions. We provide actionable insights and recommendations, guiding you on the optimal course of action to achieve your business objectives.</p>
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
      <h2>Expertise</h2>
    </div>
    <div style={{ width:'50%' }}>
      <p>Our team of skilled data analysts and scientists brings a wealth of experience to the table, ensuring the success of your analytics projects.</p>
    </div>
  </div>
  
</div>



          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Custom Solutions </h2>
              <div style={{ width:'50%' }}>
              <p>Understand that each business is unique. Our tailored analytics solutions align with your specific goals and challenges.</p>
            </div> </div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Scalability</h2>
              <div style={{width:'50%'}}> 
              <p>Whether you're a startup or an enterprise, our scalable solutions grow with your business, adapting to evolving data needs.</p>
            </div></div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen';}}>
            <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'lightgreen';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Data Security</h2>
              <div style={{width:'50%'}}>
              <p>Trust is paramount in the data domain. Rest assured, our robust security measures protect your data assets, maintaining confidentiality and integrity.</p>
            </div></div>
          </div>


          <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: '#34495E ' }}>
            <div style={{ color: 'white', fontSize: '40px', textAlign: 'center', margin: '0 100px' }}>
              Transform your data into actionable insights with us
            </div>
            <div style={{ color:'white', fontSize: '20px', textAlign: 'center', margin: '1px 100px' }}>
              <div style={{ marginTop:'5px', fontSize: '30px',}}>
                Where innovation meets analytics 
              </div>
              <br />
              Contact us today to embark on your data-driven journey.
            </div>


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
              fontWeight: 'bold' // corrected fontWeight syntax
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


export default HoverBox;
