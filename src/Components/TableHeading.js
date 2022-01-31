import React from "react";
import "./TableHeading.css";

export default function TableHeading({ headingtitle, ordernumber, orderList }) {
  return (
    <>
      <div className="container order" style={{ display: "flex" }}>
        <h4>{headingtitle}</h4>&nbsp;
        <span className="ordernumber">{ordernumber}</span>
      </div>
      <div class="orderlist">
        {orderList}
        <hr></hr>
      </div>
    </>
  );
}
