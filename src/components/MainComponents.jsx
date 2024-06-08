import React from "react";
function Cards(props){
    console.log(props);
   return(
    <>
<div className="cards">
<img src={props.img} alt="image1" />
<h3>{props.title}</h3>
</div>
    </>
   )
}
export default Cards;














// import React from 'react';

// const MainComponent = ({ heading, paragraph,imageSrc }) => {
//   return (
//     <div className="justify-center items-center h-screen">
    
    
//         <h1 className="text-3xl font-bold mb-4">{heading}</h1>
//         <p className="mb-8">{paragraph}</p>
//         <img src="" alt="Image" className="w-48 h-48 object-cover rounded" />

//     </div>
//   );
// };

// export default MainComponent;
