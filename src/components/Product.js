import "../style/Product.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductList from "./ProductList";
import Badge from "react-bootstrap/Badge";

function Product(props) {
  const dataProduct = [
    {
      id: 1,
      image:
        "https://down-vn.img.susercontent.com/file/cc52f293cebd029c2ee6d84668c8e445_tn",
      title:
        "Khăn mặt khô Animerry dùng 1 lần lau khô, lau ướt , Giấy lau mặt dùng một lần",
      price: "2.000",
      sold: "25000",
      discount: "Giảm 30%",
    },
    {
      id: 2,
      image:
        "https://down-vn.img.susercontent.com/file/cc52f293cebd029c2ee6d84668c8e445_tn",
      title:
        "Khăn mặt khô Animerry dùng 1 lần lau khô, lau ướt , Giấy lau mặt dùng một lần",
      price: "2.000",
      sold: "25000",
    },
    {
      id: 3,
      image:
        "https://down-vn.img.susercontent.com/file/cc52f293cebd029c2ee6d84668c8e445_tn",
      title:
        "Khăn mặt khô Animerry dùng 1 lần lau khô, lau ướt , Giấy lau mặt dùng một lần",
      price: "2.000",
      sold: "25000",
    },
    {
      id: 4,
      image:
        "https://down-vn.img.susercontent.com/file/cc52f293cebd029c2ee6d84668c8e445_tn",
      title:
        "Khăn mặt khô Animerry dùng 1 lần lau khô, lau ướt , Giấy lau mặt dùng một lần",
      price: "2.000",
      sold: "25000",
    },
    {
      id: 5,
      image:
        "https://down-vn.img.susercontent.com/file/cc52f293cebd029c2ee6d84668c8e445_tn",
      title:
        "Khăn mặt khô Animerry dùng 1 lần lau khô, lau ướt , Giấy lau mặt dùng một lần",
      price: "2.000",
      sold: "25000",
    },
    {
      id: 6,
      image:
        "https://down-vn.img.susercontent.com/file/cc52f293cebd029c2ee6d84668c8e445_tn",
      title:
        "Khăn mặt khô Animerry dùng 1 lần lau khô, lau ướt , Giấy lau mặt dùng một lần",
      price: "2.000",
      sold: "25000",
    },
  ];
  return (
    <Container>
      <div className="product">
        <div className="product-top">
          <div className="product-top-text">
            <h4>
              Danh Sách Sản Phẩm <Badge bg="secondary">New</Badge>
            </h4>
          </div>
        </div>
        <div className="product-content">
          <Row>
            <ProductList dataProduct={dataProduct} />
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Product;
