import "./intro-style.css";
import introImage from "../../../assets/images/Home_Page/herosection/avatar.png";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <section className="introSection" style={{}}>
      <div className="intro-text-container">
        <div className="headText">
          <h1>
            LEARNING <span>PLATFORM</span>
          </h1>
          <h1>FOR ALL LEARNER</h1>
          <h1>
            WITH HIS <span>OWN COURSE</span>
          </h1>
        </div>
        <div className="subText">
          <h5>
            Elevate your programming skills, solve challenges, and unlock the world of coding
            possibilities.
          </h5>
        </div>

        <div className="intro-btn-section">
          <Link to="/my-place">
            <button className="intro-btn">your course</button>
          </Link>
          <button className="intro-btn">Helping Material</button>
        </div>
      </div>

      <div className="intro-img-container">
        <img src={introImage} alt="intro" />
      </div>
    </section>
  );
};

export default Intro;
