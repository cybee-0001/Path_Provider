import { useState, useEffect } from "react";
import AddForm from "./AddForm";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [wantToAdd, setWantToAdd] = useState(false);

  useEffect(() => {
    const slide = document.querySelector(".addNote_modal");
    if (wantToAdd) {
      slide.style.transform = "translateX(0%)";
    } else {
      slide.style.transform = "translateX(-200%)";
    }
  }, [wantToAdd]);

  return (
    <section className="myPlace-Section">
      <div className="headerTag">
        {" "}
        <h1>Start Your </h1>
        <h1>Learning Journey</h1>
        <p>
          Our platform AVGAYAN seeks to leverage these resources while offering a cohesive framework
          for learners to create and track your educational journeys.
        </p>
      </div>

      <div className="btnSection">
        <button className="largeBtn " onClick={() => setWantToAdd(true)}>
          + Add Course
        </button>
        <Link to="/course">
          <button className="largeBtn">Our Course</button>
        </Link>
      </div>

      <div className="addNote_modal ">
        <AddForm cancelFunction={setWantToAdd} re />
      </div>
    </section>
  );
};

export default Header;
