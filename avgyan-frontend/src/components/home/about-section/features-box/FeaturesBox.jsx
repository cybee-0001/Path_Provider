/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect } from "react";

import "./style.css";
const FeaturesBox = ({ title_1, title_2, text, img, btn }) => {
  useEffect(() => {
    //want to animate the blob and fakeBlob
    const cards = document.querySelectorAll(".innerCard");

    window.addEventListener("mousemove", (ev) => {
      cards.forEach((e) => {
        const blob = e.querySelector(".blob");
        const fBlob = e.querySelector(".fakeBlob");
        const rec = fBlob?.getBoundingClientRect();

        if (blob && rec) {
          blob.animate(
            [
              {
                transform: `translate(${ev.clientX - rec.left - rec.width / 2 - 200}px,${
                  ev.clientY - rec.top - rec.height / 4
                }px)`,
              },
            ],
            {
              duration: 300,
              fill: "forwards",
            }
          );

          blob.style.opacity = "1";
        }
      });
    });
  }, []);

  return (
    <div className="innerCard">
      <div className="blob specialStyle"></div>
      <div className="fakeBlob specialStyle"></div>

      <div className="card-body ">
        <div className="card-title ">
          <h1>{title_1} </h1>
          <h1>{title_2}</h1>
        </div>
        <p className="card-text">{text}</p>
        {btn && (
          <div className="card-btn ">
            <button className="largeBtn largeBtn">Start Now</button>
          </div>
        )}
      </div>
      <div className="card-img">
        <img src={img} alt="Courses" />
      </div>
    </div>
  );
};

export default FeaturesBox;
