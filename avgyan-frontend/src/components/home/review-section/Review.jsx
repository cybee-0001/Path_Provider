import "./style.css";
import arrow from "../../../assets/icons/arrow.svg";
import user from "../../../assets/icons/user.svg";
import { useState } from "react";

const reviewData = [
  {
    name: "John Doe",
    role: "Student",
    review:
      "Cracked FAANG after this course! When I enrolled, I had a decent grasp of DSA but this course definitely helped me level up my skills. The practice problems and mock interviews were incredibly valuable. Huge thanks to the Avgayan Team! ",
  },
  {
    name: "Priya Sharma",
    role: "college-Student",
    review:
      "Feeling motivated and ready to take on the tech world! This course completely transformed my approach to coding interviews. I went from feeling overwhelmed to feeling confident in my abilities. Thanks, Avgayan Team, for your amazing guidance! ",
  },
  {
    name: "Sahil Patel",
    role: "IIT-Student",
    review:
      "I came into this course with no prior DSA experience. The Avgayan Team's clear explanations and engaging exercises made learning fun and effective. Now I feel confident tackling any coding challenge.",
  },
  {
    name: "Riya Singh",
    role: "Student",
    review:
      "I can't recommend this course enough. The instructors are incredibly knowledgeable and supportive. They helped me identify my weaknesses and provided the resources I needed to improve. ",
  },
  {
    name: "Akash Malhotra",
    role: "Student",
    review:
      "This course is a game-changer! Thanks to Avgayan Team, I landed my dream job at a top tech company. Their comprehensive curriculum and personalized feedback were instrumental in my success",
  },
];

const Review = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="reviewSection">
      <div className="headTag">
        <h1>
          what our <br />
          <span>Students Say</span>
        </h1>
      </div>
      <div className="review-container">
        <div className="review fakeReview "></div>
        <div className="review fakeReview "></div>

        <div className="review">
          <div className="review-text">
            <span>&quot;</span>
            <p>{reviewData[index].review}</p>
            <span>&quot;</span>
          </div>

          <div className="review-user">
            <div className="user-icon">
              <img src={user} alt="" />
            </div>
            <div className="user-info">
              <h3>{reviewData[index].name}</h3>
              <p>{reviewData[index].role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="btnSection">
        <button
          className="btn"
          onClick={() => {
            if (index > 0) {
              setIndex((prevCount) => prevCount - 1);
            } else {
              setIndex(reviewData.length - 1);
            }
          }}
        >
          <img src={arrow} alt="left" style={{ rotate: "-180deg" }} />
        </button>
        <button
          className="btn"
          onClick={() => {
            if (index < reviewData.length - 1) {
              setIndex((prevCount) => prevCount + 1);
            } else {
              setIndex(0);
            }
          }}
        >
          <img src={arrow} alt="left" />
        </button>
      </div>
    </section>
  );
};

export default Review;
