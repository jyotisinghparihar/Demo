import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory

const MyComponent = () => {
  const history = useHistory(); // Initialize useHistory

  const handleClick = () => {
    // Example: Pushing to a new route when a button is clicked
    history.push('/new-route');
  };

  return (
    <div>
      <button onClick={handleClick}>Go to New Route</button>
    </div>
  );
};

export default MyComponent;
