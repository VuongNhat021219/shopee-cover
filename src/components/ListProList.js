import React from "react";
import "../style/ListProList.scss";


function ListProList(props) {
  const { dataListProList } = props;

  return (
    <div className="ListProList">
      {dataListProList.map((item) => (
        <div key={item.id} className="ListProList-item">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ListProList;
