import React from "react";
import "../style/SliderFooter.scss";

function SliderFooter(props) {
  const { dataSlider } = props;
  //   console.log(props);
  return (
    <>
      {dataSlider.map((item) => (
        <div className="slider-footer-list" key={item.id}>
          <div className="slider-footer-img">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="slider-footer-text">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default SliderFooter;
