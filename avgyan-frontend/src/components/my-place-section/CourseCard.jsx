/* eslint-disable react/prop-types */
import { useState } from "react";
import "./progress-style.css";
import { deleteContent, saveProgress } from "../../api/axios";

const CourseCard = ({ content, setSelectedContent }) => {
  const [count, setCount] = useState(content.completeTask_count);
  const [checkedItems, setCheckedItems] = useState([
    content.tasks.filter((task) => task.completed).map((task) => task._id),
  ]);
  const [newContent, setContent] = useState({ tasks: content.tasks });
  const total = content.tasks.length;

  const handleUpdateClick = (content) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setSelectedContent(content);
  };

  const handleDeleteClick = async () => {
    await deleteContent(content._id);
    window.location.reload();
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
    const { checked, dataset } = event.target;
    const taskId = dataset.id;

    setContent((prevContent) => {
      const updatedTasks = prevContent.tasks.map((task) =>
        task._id === taskId ? { ...task, completed: checked } : task
      );
      return { ...prevContent, tasks: updatedTasks };
    });

    setCheckedItems((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, taskId];
      } else {
        return prevCheckedItems.filter((id) => id !== taskId);
      }
    });
  };

  const handleSaveProgress = async () => {
    //  count how many tasks are completed
    //  send a post request to the server to save the progress

    const reqBody = {
      completeTask_count: count,
      // only checked urls
      taskIDs: checkedItems,
    };
    await saveProgress(content._id, reqBody);
  };

  const progressPercentage = (count / total) * 100;
  return (
    <div className="mainContainer">
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="course_header">
        <div className="content-details">
          <h1>{content.title}</h1>

          <h3>{content.description}</h3>
        </div>
        <div className="content-btn">
          <button className="largeBtn" onClick={() => handleUpdateClick(content)}>
            Update
          </button>
          <button className="largeBtn" onClick={handleDeleteClick}>
            Remove
          </button>
        </div>
      </div>
      <div className="course-container">
        {newContent.tasks.map((topic, index) => (
          <div className="quality-item" key={index}>
            <div className="checkDiv">
              <input
                type="checkbox"
                name={topic.title}
                data-id={topic._id}
                checked={topic.completed}
                onChange={handleCheckboxChange}
              />
            </div>
            <a href={topic.url} target="_blank">
              <h4>{topic.title}</h4>
            </a>
          </div>
        ))}
      </div>
      <div className="progress-btn" onClick={handleSaveProgress}>
        <button className="largeBtn">progress Save</button>
      </div>
    </div>
  );
};

export default CourseCard;
