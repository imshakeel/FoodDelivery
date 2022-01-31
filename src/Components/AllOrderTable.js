import { Restaurant } from "@mui/icons-material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./AllOrderTable.css";
import Select from "react-dropdown-select";
import { Link } from "react-router-dom";

export default function AllOrderTable() {
  const [dropdownSelectValue, setdropdownSelectValue] = useState();

  const [orderStatusList, setOrderStatusList] = useState([]);
  const [realTableData, setrealTableData] = useState([]);

  const [dataAll, setDataAll] = useState([]);

  // console.log(getstatus, "status");
  // setdropdownSelectValue(getstatus);

  // let selectValue = document.getElementById("selectValue").value;
  // selectValue = getstatus;

  useEffect(() => {
    postRequest("http://18.223.28.200:82/api/OrderByRest/6").then((data) => {
      console.log(data.orders);
      setDataAll(data.orders);
      let dishName = data.orders.map((item) => item.orderItems);
      dishName[0].map((item) => console.log(item.orderId, "zero index value"));

      console.log(dishName[0], "dishName");

      setrealTableData(data.orders);
      let result = data.orders.map((item) => item.orderStatus);
      console.log(result);

      let newArray = [...new Set(result)];
      console.log(newArray);
      let obj = [];
      newArray.forEach((item) => {
        obj.push({ value: item, label: item });
      });
      console.log(obj, "dd");
      setOrderStatusList(obj);
      // console.log(setDataAll, "aaaa");
    });
  }, []);

  function postRequest(url, data) {
    return fetch(url, {
      requestMode: "no-cors",
      method: "GET",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        header: ["Control-allow-Headers"],
      }),
    }).then((response) => response.json());
  }

  useEffect(() => {
    let filteredData = realTableData.filter(
      (item) => item.orderStatus == dropdownSelectValue
    );
    setDataAll(filteredData);
    // setrealTableData();
    console.log(filteredData, "fil");
  }, [dropdownSelectValue]);

  function getid(id, method, orderStatus, dishName) {
    console.log(id, "id");
    console.log(method, "id");
    localStorage.setItem("id", id);
    localStorage.setItem("paymentType", method);
    localStorage.setItem("orderStatus", orderStatus);
  }

  return (
    <div>
      <div className="container">
        <div className="bordertable">
          <div style={{ display: "flex" }}>
            <Select
              onChange={(data) => {
                setdropdownSelectValue(data[0].value);
              }}
              options={orderStatusList}
            />

            <button>Search</button>
          </div>
          <table
            id="mytable"
            className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle
                        card-table table-wrapper dataTable no-footer"
          >
            <tr>
              <th>#</th>
              <th className="datetable">DATE</th>
              <th>RATE</th>
              <th>RESTAURENT</th>

              <th>TOTAL</th>
              <th>ORDER STATUS</th>
              <th>ACTIONS</th>
            </tr>
            <tbody id="tablebody">
              {dataAll.length != 0 &&
                dataAll.map((element, index) => (
                  <tr>
                    <td
                      onClick={() =>
                        getid(
                          element.orderid,
                          element.paymentType,
                          element.orderStatus
                        )
                      }
                    >
                      <Link to={"/orderdishview"}>{element.orderid}</Link>
                    </td>
                    <td>{moment(element.orderDate).format("Do MMM YY")}</td>
                    <td>{element.orderRating}</td>
                    <td>{element.restaurantName}</td>

                    {/* <td>{element.grandTotal}</td> */}

                    <td>{element.orderStatus}</td>
                    <td></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
