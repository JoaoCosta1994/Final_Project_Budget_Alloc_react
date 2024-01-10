import React from 'react';

const MyComponent = () => {
  // Declare and initialize an array
  const myArray = ['apple', 'banana', 'orange'];

  return (
    <div>
      <h1>Array Values:</h1>
      <ul>
        {/* Map through the array and render its values */}
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
