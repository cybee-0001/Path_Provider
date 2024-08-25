import "./style.css";

import img0 from "../../../assets/images/Home_Page/9_some_famous_courses/c0.png";
import img1 from "../../../assets/images/Home_Page/9_some_famous_courses/c1.png";
import img2 from "../../../assets/images/Home_Page/9_some_famous_courses/c2.png";
import img3 from "../../../assets/images/Home_Page/9_some_famous_courses/c3.png";
import img4 from "../../../assets/images/Home_Page/9_some_famous_courses/c4.png";
import img5 from "../../../assets/images/Home_Page/9_some_famous_courses/c5.png";
import img6 from "../../../assets/images/Home_Page/9_some_famous_courses/c6.png";
import img7 from "../../../assets/images/Home_Page/9_some_famous_courses/c7.png";
import img8 from "../../../assets/images/Home_Page/9_some_famous_courses/c8.png";

const courseImages = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

const CourseDisplay = () => {
  return (
    <section className="courseDisplay">
      <h1>
        Popular <br />
        <span>Courses</span>
      </h1>
      <div className="course-container">
        <div className="images">
          {courseImages.map((img, i) => {
            return (
              <div className="img" key={i}>
                <img src={img} alt="" />
              </div>
            );
          })}
          {courseImages.map((img, i) => {
            return (
              <div className="img" key={i}>
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseDisplay;
