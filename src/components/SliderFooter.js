import React from "react";
import "../style/SliderFooter.scss";
import { Link } from "react-router-dom";

function SliderFooter(props) {
  const { dataSlider } = props;
  //   console.log(props);
  return (
    <>
      {dataSlider.map((item) => (
        <Link
          key={item.id}
          to="/"
          style={{ textDecoration: "none", color: "#000" }}
          className="slider-main"
        >
          <div className="slider-footer-list">
            <div className="slider-footer-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="slider-footer-text">
              <p>{item.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default SliderFooter;
