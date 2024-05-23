import React, { useRef, useEffect } from 'react';

const ImageSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const animationDuration = 10000; // Adjust animation duration (milliseconds)
    let animationStartTime = Date.now();

    const animateScroll = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - animationStartTime;
      const scrollRatio = elapsedTime / animationDuration;
      container.scrollLeft = scrollRatio * scrollWidth;

      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft = 0;
        animationStartTime = currentTime;
      }

      requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animateScroll);
    };
  }, []);

  return (
    <div style={styles.container} ref={containerRef}>
      <img style={styles.image} src="support.jpg" alt="support.jpg" />
      <img style={styles.image} src="retail.jpg" alt="retail.jpg" />
      <img style={styles.image} src="image3.jpg" alt="Image 3" />
      <img style={styles.image} src="image4.jpg" alt="Image 4" />
    </div>
  );
};

const styles = {
  container: {
    width: '100%', // Occupy full width of parent
    height: '200px', // Adjust height as needed
    overflow: 'auto', // Enable scrolling
    whiteSpace: 'nowrap', // Ensure images stay in a single line
    position: 'relative', // Positioning context for absolute positioning
    display: 'flex', // Use flexbox to align images horizontally
    alignItems: 'center', // Center align images vertically
  },
  image: {
    flex: '0 0 auto', // Don't allow images to grow or shrink, maintain their original size
    margin: '0 10px', // Add spacing between images (optional)
  },
};

export default ImageSlider;
