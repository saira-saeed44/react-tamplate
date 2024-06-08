import React, { useState } from 'react';
// import Featurecomp from './Featurecomp';
import Togglesection from './Togglesection';

function App() {
  // const [showFeatures, setShowFeatures] = useState(false);

  const handleToggle = (value) => {
    setShowFeatures(value); 
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      {/* <h1 className="text-3xl font-bold mb-6">Your App</h1> */}
      <Togglesection onToggle={handleToggle} />
      {/* {showFeatures && <Featurecomp />} */}
    </div>
  );
}

export default App;
