/* eslint-disable react/prop-types */

import icon from "../../../../assets/images/Home_Page/6_box4/icon.png";

import "./style.css";
// eslint-disable-next-line react/prop-types
const BoxSection = ({ data, orderIndex }) => {
  const { boxTitle, subText, btnText, img } = data;
  return (
    <div className="box-section">
      <div className="box-icon">
        <img src={icon} alt="Icon" />
      </div>
      <div className="box-container">
        <div className={`box-container-left ${orderIndex}`}>
          <img src={img} alt="Left Main" />
        </div>
        <div className="box-container-right">
          <h1 className="box-title">{boxTitle}</h1>
          <div className="box-sub-text">
            <p>{subText}</p>
          </div>

          {btnText && (
            <div className="box-btn">
              <button className="largeBtn">About Us</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
