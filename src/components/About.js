import React from "react";

const About = ({ image, about }) => {
  const placeholderImage = "https://via.placeholder.com/215";
  const altText = "blog logo";

  return (
    <aside>
      <img src={image || placeholderImage} alt={altText} />
      <p>{about}</p>
    </aside>
  );
};

export default About;
