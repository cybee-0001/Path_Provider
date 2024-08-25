/* eslint-disable react/prop-types */
import { useState } from "react";

import "./formstyle.css";
import { createContent } from "../../api/axios";

const AddForm = ({ cancelFunction }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urls, setUrls] = useState([""]);
  const [urlsTitle, setUrlsTitle] = useState([""]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const reBody = {
      title,
      description,
      tasks: urls.map((url, index) => ({ url, title: urlsTitle[index] })),
    };
    const { data } = await createContent(reBody);
    if (data.status === 200) {
      cancelFunction(false);
      window.location.reload();
    }
  };

  const handleChangeUrl = (index, e) => {
    const updatedUrls = [...urls];
    updatedUrls[index] = e.target.value;
    setUrls(updatedUrls);
  };

  const handleChangeUrlTitle = (index, e) => {
    const updatedUrlsTitle = [...urlsTitle];
    updatedUrlsTitle[index] = e.target.value;
    setUrlsTitle(updatedUrlsTitle);
  };

  const handleAddInput = () => {
    setUrls([...urls, ""]);
  };
  const handleRemoveInput = (index) => {
    const newUrls = urls.slice();
    newUrls.splice(index, 1);
    setUrls(newUrls);
  };
  const cancelClick = (e) => {
    e.preventDefault();
    console.log("Class");
    cancelFunction(false);
  };
  return (
    <form onSubmit={handelSubmit} method="post" className="addForm">
      <h5 className="label">Course Title</h5>
      <div className="input">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Name of the Course"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <h5 className="label">Course Description</h5>
      <div className="input ">
        <textarea
          type="text"
          name="body"
          value={description}
          placeholder="Description Of Course"
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>
      <h5>Collect Urls</h5>
      {urls.map((url, index) => (
        <div className="input ulrBox" key={index}>
          <input
            type="url"
            value={url}
            onChange={(e) => handleChangeUrl(index, e)}
            placeholder="Enter URL"
          />
          <input
            type="text"
            value={urlsTitle[index]}
            onChange={(e) => handleChangeUrlTitle(index, e)}
            placeholder="URL Title"
          />
          {urls.length > 1 && (
            <button type="button" className="removeBtn" onClick={() => handleRemoveInput(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button className="addUrl" type="button" onClick={handleAddInput}>
        Add URL
      </button>

      <div className="button_section">
        <button type="submit" className="largeBtn">
          {" "}
          Add Content
        </button>
        <button onClick={cancelClick} className="largeBtn">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddForm;
