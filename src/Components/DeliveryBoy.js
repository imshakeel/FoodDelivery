import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DeliveryBoy() {
  const [deliveryBoyList, setdeliveryBoyList] = useState([]);

  const DeliveryBoy = async () => {
    const responce = await axios.get(
      "http://18.223.28.200:82/api/DeliveryBoy?contactNo=0"
    );
    console.log("boy", responce.data.DeliveryBoyDetails);
    const boylist = responce.data.DeliveryBoyDetails;
    setdeliveryBoyList(boylist);
  };
  useEffect(() => {
    DeliveryBoy();
  }, []);

  DeliveryBoy();
  return (
    <div className="container">
      <Link to="\addnewdeliveryboy">
        <button style={{ float: "right" }}>Add New</button>
      </Link>
      <table
        style={{ padding: "15px" }}
        id="mytable"
        className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle
                        card-table table-wrapper dataTable no-footer"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Contact</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {deliveryBoyList != 0 &&
            deliveryBoyList.map((item, index) => (
              <tr>
                <td>{item.deliveryBoyId}</td>
                <td>{item.name}</td>
                <td>{item.contactNo}</td>
                <td>{item.image}</td>
                <td>{item.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
