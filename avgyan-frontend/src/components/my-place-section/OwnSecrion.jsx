import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import "./style.css";
import { allContents } from "../../api/axios";
import EditForm from "./EditForn";

const OwnSection = () => {
  const [AllContents, setAllContents] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    const fetchContents = async () => {
      const { data } = await allContents();
      setAllContents(data.data);
    };
    fetchContents();
  }, []);

  useEffect(() => {
    const slide = document.querySelector(".EditNote_modal");
    if (selectedContent) {
      slide.style.transform = "translateX(0%)";
    } else {
      slide.style.transform = "translateX(-200%)";
    }
  }, [selectedContent]);

  return (
    <section style={{ marginTop: "4rem", padding: "0 5rem" }}>
      <h1 style={{ fontSize: "4rem", textAlign: "center" }}>Your Bill Board</h1>

      <div className="mainSection">
        <div className="transparentBlank">No Progress</div>
        {AllContents.length !== 0 &&
          AllContents.map((content, index) => (
            <CourseCard key={index} content={content} setSelectedContent={setSelectedContent} />
          ))}
      </div>

      <div className="EditNote_modal ">
        {selectedContent && (
          <EditForm content={selectedContent} setSelectedContent={setSelectedContent} />
        )}
      </div>
    </section>
  );
};

export default OwnSection;
