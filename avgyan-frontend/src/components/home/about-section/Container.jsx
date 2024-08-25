// import React from 'react'
import "./about-style.css";
import BoxSection from "./box-left-section/BoxSection";
import FeaturesBox from "./features-box/FeaturesBox";
import icon1 from "../../../assets/images/Home_Page/7_box5/icon.png";
import img1 from "../../../assets/images/Home_Page/4_Box2/main-image.jpg";
import img2 from "../../../assets/images/Home_Page/5_Box3/main-image1.jpg";
import img3 from "../../../assets/images/Home_Page/6_box4/main-image.avif";
import icon from "../../../assets/images/Home_Page/6_box4/icon.png";
import feaImage1 from "../../../assets/images/Home_Page/7_box5/main.png";
import feaImage2 from "../../../assets/images/Home_Page/8_box6/main.png";
import icon3 from "../../../assets/images/Home_Page/8_box6/icon.png";

const featuresData = [
  {
    title_1: "Explore our",
    title_2: "courses",
    text: "Discover diverse courses tailored to your interests and expertise. Explore, learn, and grow with our curated selection. Start today!",
    img: feaImage1,
    icon: icon1,
    btn: true,
  },
  {
    title_1: "Hands on",
    title_2: "project",
    text: "Get hands-on with real-world projects, applying theoretical knowledge to practical scenarios. Build skills, gain experience, and prepare for success.",
    img: feaImage2,
    icon: icon3,
    btn: false,
  },
];

const aboutData = [
  {
    boxTitle: "Why We ??",
    subText:
      "At AVGAYAN, we stand out from the crowd by offering personalized learning experiences tailored to your unique preferences. Unlike other platforms, we integrate diverse online resources seamlessly, providing structured guidance and tracking tools to enhance your learning journey. Experience the difference with AVGAYAN and unlock your full learning potential today.",
    btnText: true,
    img: img1,
    icon: icon,
  },
  {
    boxTitle: "our vision !!",
    subText:
      "Our vision at Avgayan is to revolutionize online learning by empowering individuals to explore, learn, and grow without limitations. We envision a world where education is accessible to all, tailored to individual needs, and fueled by innovation. Through our platform, we strive to foster a community of lifelong learners, where curiosity is celebrated, and knowledge knows no boundaries.",
    btnText: false,
    img: img2,
    icon: icon,
  },
  {
    boxTitle: "LEARN FROM YOUR FAVORITES",
    subText:
      "Learn from Your Favorites is a unique feature of our platform, enabling users to curate personalized learning experiences from their favorite resources. Seamlessly integrate videos, articles, courses, and more into structured learning paths tailored to your interests. With intuitive tracking tools and AI recommendations, discover, organize, and master topics at your own pace. Experience the freedom to learn your way, only at [Your Website Name].",
    btnText: false,
    img: img3,
    icon: icon,
  },
];

const Container = () => {
  return (
    <section className="aboutSection">
      {aboutData.map((data, ind) => {
        return (
          <BoxSection key={ind} data={data} orderIndex={ind % 2 === 0 ? "order-1" : "order-2"} />
        );
      })}

      <div className="features-box-container">
        {featuresData.map((data, ind) => {
          return (
            <div className="card" key={ind}>
              <div className="cardIcon box-icon ">
                <img src={data.icon} alt="U" />
              </div>
              <FeaturesBox {...data} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Container;
