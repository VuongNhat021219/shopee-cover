import "../style/ProductList.scss";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ProductList(props) {
  const { dataProduct } = props;
  console.log(dataProduct);
  return (
    <>
      {dataProduct.map((item, index) => (
        <Col className="productList" key={index}>
          <div className="productList-link">
            <Link to="/" >
              <div className="productList-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="productList-hastaf">
                <span>{item.trust}</span>
              </div>
              <div className="productList-content">
                <div className="productList-title">
                  <LinesEllipsis
                    text={item.title}
                    maxLine={2} // Số dòng tối đa
                    ellipsis="..." // Dấu chấm ba
                    trimRight // Cắt chữ bên phải
                    basedOn="letters" // Dựa trên số lượng chữ
                  />
                </div>
                <div
                  className={
                    item.discount ? "productList-discount" : "paddingTop25"
                  }
                >
                  {item.discount}
                </div>
              </div>
              <div className="productList-footer">
                <div className="productList-price">
                  {item.price} <span>VND</span>
                </div>
                <div className="productList-sold">
                  Đã bán <span>{item.sold}</span>
                </div>
              </div>
            </Link>
          </div>
        </Col>
      ))}
    </>
  );
}

export default ProductList;
