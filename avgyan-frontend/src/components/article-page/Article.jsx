/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
const Article = ({ author, profilePicture, title, sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="article-container accordion-item">
      <img src={profilePicture} alt="Your Profile Picture" className="profile-picture" />
      <div className="article-content ">
        <div className="section1 accordion-header" onClick={toggleAccordion}>
          <p>{title}</p>
          <p>Author : {author}</p>
        </div>
        <div
          className="section2 accordion-content"
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current.scrollHeight + 30}px` : "0",
            padding: isOpen ? "15px" : "0 15px",
          }}
        >
          {sections[0].content.map((content, index) => {
            return <p key={index}>{content}</p>;
          })}
          <span>{sections[1].question}</span>
          <p>{sections[1].answer}</p>
          <span>{sections[2].question}</span>
          <p>{sections[2].answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
