import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

export default function DishItem(props) {
  function getname(dishname, dishid) {
    console.log(dishname);
    console.log(dishid);
    localStorage.setItem("dishname", dishname);
    localStorage.setItem("dishid", dishid);
  }

  const [DataDish, setDataDish] = useState([]);

  let Id = localStorage.getItem("ID");
  console.log(Id, "id");

  const getRest = (value) =>
    axios.post("http://18.223.28.200:82/api/values", value);
  const getdata = async () => {
    try {
      const responce = await getRest({
        ActionName: "GETDISH",
        dishId: 0,
        restaurantId: Id,
      });
      const table = responce.data.Table;
      console.log(table, "table");

      setDataDish(table);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
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
            <th className="datetable">DATE</th>
            <th>RATE</th>
            <th>Dish</th>

            <th>TOTAL</th>
            <th>ORDER STATUS</th>
            <th>ACTIONS</th>
          </tr>
          <tbody id="tablebody">
            {DataDish.length > 0 &&
              DataDish.map((element, index) => (
                <tr>
                  <td>{element.dishId}</td>
                  <td>{moment(element.createdData).format("Do MMM YY")}</td>
                  <td>
                    <Link
                      to="/dishdetail"
                      onClick={() => getname(element.dishName, element.dishId)}
                    >
                      {element.dishName}
                    </Link>
                  </td>
                  <td>{element.dishType}</td>

                  <td>{element.dishSize}</td>

                  <td>{element.available == true && "right"}</td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
        <p></p>
      </div>
    </div>
  );
}
