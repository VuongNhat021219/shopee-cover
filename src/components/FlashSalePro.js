import React from "react";
import "../style/FlashSalePro.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function FlashSalePro(props) {
  const { dataFlashSale } = props;

  return (
    <>
      {dataFlashSale.map((item) => (
        <Col className="colFlashSale" key={item.id}>
          <div className="flashSalePro">
            <Link to="/post">
              <div className="flashSale-img">
                <img src={item.image} alt={item.titleImage} />
              </div>
              <div className="flashSale-price">
                <p>
                  {item.price} <span>VND</span>
                </p>
              </div>
              <div className="flashSale-progress">
                <ProgressBar now={item.progress} label={`Đang Bán Chạy`} />
              </div>
            </Link>
          </div>
        </Col>
      ))}
    </>
  );
}

export default FlashSalePro;
