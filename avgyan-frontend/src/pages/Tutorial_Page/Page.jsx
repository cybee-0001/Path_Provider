import Card from "../../components/tutorial-page/Card";
import "./style.css";

import img1 from "../../assets/images/tutorial/img/Html_image.jpg";
import img2 from "../../assets/images/tutorial/img/graph.jpg";
import img3 from "../../assets/images/tutorial/img/java.jpg";
import img4 from "../../assets/images/tutorial/img/react.jpg";
import img5 from "../../assets/images/tutorial/img/c.jpeg";
import img6 from "../../assets/images/tutorial/img/js.jpg";
import img7 from "../../assets/images/tutorial/img/Html_image.jpg";

const cardData = [
  {
    imgSrc: img1,
    topic: "HTML",
    description: " Discover HTML the fun way. Your Essential Guide for college and interviews!",
    author: "Avgayan Team",
    date: "January 1 2024",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids", // Add URL here
  },
  {
    imgSrc: img2,
    topic: "Graph",
    description: "Discover Graph the fun way. Your Essential Guide for college and interviews!",
    author: "Avgayan Team",
    date: "January 10, 2024",
    link: "https://github.com/topics/graph-datastructures", // Add URL here
  },
  {
    imgSrc: img3,
    topic: "JAVA",
    description: "Discover JAVA the fun way. Your Essential Guide for college and interviews!",
    author: "Avgayan Team",
    date: "January 14, 2024",
    link: "https://github.com/topics/data-structures-java", // Add URL here
  },
  {
    imgSrc: img4,
    topic: "React",
    description: "Discover React the fun way. Your Essential Guide for college and interviews!",
    author: "Avgayan Team",
    date: "January 1, 2024",
    link: "https://github.com/topics/react-project-structure", // Add URL here
  },
  {
    imgSrc: img5,
    topic: "C",
    description: "Discover C the fun way. Your Essential Guide for college and interviews!",
    author: "Avgayan Team",
    date: "January 18, 2024",
    link: "https://github.com/topics/structures-c", // Add URL here
  },
  {
    imgSrc: img6,
    topic: "JavaScript",
    description:
      "Discover JavaScript the fun way. Your Essential Guide for college and interviews!",
    author: "Avgayan Team",
    date: "January 1, 2024",
    link: "https://github.com/topics/javascript", // Add URL here
  },
  {
    imgSrc: img7,
    topic: "C++",
    description: "Discover C++ the fun way. Your Essential Guide for college and interviews!",
    author: "Avgayan Team",
    date: "January 1, 2024",
    link: "https://github.com/topics/cpp", // Add URL here
  },
  // Add more objects for additional card elements
];
const Page = () => {
  return (
    <main className="tutorialPage">
      <h1 className="page-title">
        Start Your Journey <br />
        <span>With Us</span>
      </h1>
      <div className="container">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </main>
  );
};

export default Page;
