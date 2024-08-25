// import React from 'react'
import "./style.css";
const qualityArray = [
  "Free for all",
  "Gather Recourses You need",
  "the best for you",
  "No one but us",
];
const QualitySection = () => {
  return (
    <section className="qualitySection">
      <div className="mainContainer">
        {qualityArray.map((quality, index) => (
          <div className="quality-item" key={index}>
            <h4>{quality}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualitySection;
