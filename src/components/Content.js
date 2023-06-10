import React from "react";
import ListPro from "./ListPro";
import FlashSale from "./FlashSale";
import "../style/Content.scss";

function Content(props) {
  return (
    <div className="Content-main">
      <ListPro />
      <FlashSale />
    </div>
  );
}

export default Content;
