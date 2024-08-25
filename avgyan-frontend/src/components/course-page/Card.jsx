/* eslint-disable react/prop-types */
const Card = ({ imgSrc, description, price, originalPrice, discount }) => {
  return (
    <div className="card">
      <img src={imgSrc} />

      <div className="card-details">
        <div className="textBox">
          <p id="descrtiption">{description}</p>
        </div>

        <div className="detailsBox">
          <div className="textAmountBox">
            <p>{price}</p>
            <p style={{ textDecoration: "line-through" }}>{originalPrice}</p>
            <p>{discount}</p>
          </div>
        </div>

        <button id="EnrollButton" className="largeBtn">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Card;
