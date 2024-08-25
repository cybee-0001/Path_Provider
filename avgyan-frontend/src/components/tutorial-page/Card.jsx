/* eslint-disable react/prop-types */
// import React from 'react'
import logo from "../../assets/images/Home_Page/Logo/logo.png";
const Card = ({ imgSrc, topic, description, author, date, link }) => {
  return (
    <div className="card">
      <img src={imgSrc} />

      <div className="card-details">
        <div className="textBox">
          <h2 id="topic">{topic}</h2>
          <p id="desctiption">{description}</p>
        </div>

        <div id="detailsBox">
          <div className="imgBox">
            <img src={logo} />
          </div>

          <div id="textAmountBox">
            <p>
              {author} . {date}
            </p>
          </div>
        </div>

        <button id="EnrollButton" className="largeBtn">
          <a href={link} target="_blank">
            Explore Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
