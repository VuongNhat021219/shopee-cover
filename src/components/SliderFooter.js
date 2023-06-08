import React from "react";
import logoShopeeMall from "../images/logo-shopeeMall.gif";
import "../style/SliderFooter.scss";

function SliderFooter(props) {
//   console.log(props);
  return (
    <>
      <div className="slider-footer-list">
        <div className="slider-footer-img">
          <img src={props.dataSlider.image} />
        </div>
        <div className="slider-footer-text">
          <p>{props.dataSlider.title}</p>
        </div>
      </div>
    </>
  );
}

export default SliderFooter;
