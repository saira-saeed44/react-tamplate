import React from "react";
import MainComponents from "./MainComponents";
import img1 from "../components/images/features.jpg";

 
function Projects() {
  const mainContent = {
        heading: "Keep projects on schedule",
        paragraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.",
      };
  return (
    <>
      <h1 className="heading1">Projects</h1>
      <div className="cardComp">
         <MainComponents heading={mainContent.heading} paragraph={mainContent.paragraph}  />

        <MainComponents img={img1} title="Feature image "/>

       
      </div>
    </>
  );
}
export default Projects;



// // App.js
// import React from 'react';
// import MainComponents from './MainComponents';
// import {image} from '../components/images/featuresimage.jpg';

// const App = () => {
//   const mainContent = {
//     heading: "Keep projects on schedule",
//     paragraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.",
//     image:"image",
//   };

//   return (
//     <div>
//       <MainComponents heading={mainContent.heading} paragraph={mainContent.paragraph} imageSrc={image} />
//     </div>
//   );
// };

// export default App;
