import React from "react";


const Mount = ({ title, description, image, patch }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>Patch: {patch}</p>
      <p>{description}</p>
    </div>
  );
};

export default Mount;