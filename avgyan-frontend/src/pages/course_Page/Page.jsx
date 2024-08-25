import img1 from "../../assets/images/courses/img/DSA.png";
import img2 from "../../assets/images/courses/img/cloudComputing.jpg";
import img0 from "../../assets/images/courses/img/full_stack.jpg";
import Card from "../../components/course-page/Card";
import "./style.css";

const cardData = [
  {
    imgSrc: img0,
    description: "Web Development Master Course @dot 1.0 Batch",
    price: "Rs 3499",
    originalPrice: "Rs 7000",
    discount: "50% OFF",
  },
  {
    imgSrc: img1,
    description: "DSA Master Course @dot 1.0 Batch",
    price: "Rs 3499",
    originalPrice: "Rs 7000",
    discount: "50% OFF",
  },
  {
    imgSrc: img2,
    description: "Cloud Computing Master Course @dot 1.0 Batch",
    price: "Rs 2499",
    originalPrice: "Rs 5000",
    discount: "50% OFF",
  },
  // Add more objects for additional card elements
];

const Page = () => {
  return (
    <main className="course-page">
      <h1>
        Be A Professonal With <span> Our Courses!!!</span>
      </h1>
      <div className="container">
        {cardData.map((data, index) => {
          return <Card key={index} {...data} />;
        })}
      </div>
    </main>
  );
};

export default Page;
