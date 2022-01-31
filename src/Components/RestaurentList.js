import moment from "moment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RestaurentList() {
  const [dataRes, setDataRes] = useState([]);

  //   postRequest('http://18.223.28.200:82/api/values',
  //   {
  //  "ActionName": "GETRESTAURANT",
  //  "restaurantId":0
  //    }
  //    )
  const getRest = (value) =>
    axios.post("http://18.223.28.200:82/api/values", value);
  const getdata = async () => {
    try {
      const responce = await getRest({
        ActionName: "GETRESTAURANT",
        restaurantId: 0,
      });
      const table = responce.data.Table;
      console.log(table);

      setDataRes(table);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  //   useEffect(() => {
  //   postRequest("http://18.223.28.200:82/api/OrderByRest/6", {
  //     ActionName: "GETRESTAURANT",
  //     restaurentId: 0,
  //   }).then((data) => {
  //     console.log(data);
  //     //   setDataAll(data);
  //     console.log(dataAll);
  //   });
  //   //   }, []);
  //   function postRequest(url, data) {
  //     return fetch(url, {
  //       requestMode: "no-cors",
  //       method: "GET",
  //       body: JSON.stringify(data),
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         header: ["Control-allow-Headers"],
  //       }),
  //     }).then((response) => response.json());
  //   }

  // const getId = (id) => {
  //   console.log(id);
  // };
  function getId(id) {
    console.log(id);
    localStorage.setItem("ID", id);
  }
  // useEffect(() => {
  //   getId();
  // }, []);
  return (
    <div>
      <div className="container">
        <div className="bordertable">
          <div>
            <i className="fas fa-search"></i>&nbsp;{" "}
            <input
              type="text"
              onkeyup="searchFun()"
              id="myinput"
              placeholder="search"
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
              <th className="datetable">Restaurent</th>
              <th>RATING</th>

              <th>TOTAL</th>
              <th>ORDER STATUS</th>
              <th>ACTIONS</th>
            </tr>
            <tbody id="tablebody">
              {dataRes.length !== 0 &&
                dataRes.map((element, index) => (
                  <tr>
                    <td onClick={() => getId(element.restaurantId)}>
                      <Link to="/dish">{element.restaurantId}</Link>
                    </td>
                    <td>{moment(element.orderDate).format("Do MMM YY")}</td>
                    <td>{element.restaurantAddress}</td>
                    <td>{element.restaurantName}</td>

                    <td>{element.grandTotal}</td>

                    <td>{element.orderStatus}</td>
                    <td></td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p></p>
        </div>
      </div>
    </div>
  );
}
