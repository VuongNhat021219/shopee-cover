import React from "react";
import ListPro from "./ListPro";
import FlashSale from "./FlashSale";
import Product from "./Product";
import "../style/Content.scss";

function Content(props) {
  return (
    <div className="Content-main">
      <ListPro />
      <FlashSale />
      <Product />
    </div>
  );
}

export default Content;
