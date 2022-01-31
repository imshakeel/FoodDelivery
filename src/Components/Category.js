import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./Category.css";

export default function Category() {
  const getdata2 = async () => {
    const data = await axios.get("http://18.223.28.200:82/api/OrderByRest/6");
    console.log(data.data.orders, "data");
  };

  const [responseData, setresponseData] = useState([]);
  const getdata = async () => {
    let response = await axios.get("http://18.223.28.200:82/api/Categories/0");
    console.log(response.data.categories, "response");
    const responseData = response.data.categories;
    responseData.map((item) => console.log(item.categoryName, "item"));
    setresponseData(responseData);
  };
  useEffect(() => {
    getdata();
    getdata2();
  }, []);

  const delte = (id) => {
    const newarray = responseData.filter((item) => item.categoryId !== id);
    setresponseData(newarray);
  };
  console.log(responseData, "data");

  const deleteCategory = (value) => {
    axios.delete(`http://18.223.28.200:82/api/Categorie/${value}`);
    console.log(value, "categoryId");
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="bordertable">
            <Link to="/addnewcategoey">
              <button style={{ marginLeft: "1030px" }}>Add New</button>
            </Link>
            <Link to="/restapi">
              <button style={{ marginLeft: "20px" }}>Back</button>
            </Link>
            <table
              id="mytable"
              className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle
                        card-table table-wrapper dataTable no-footer"
            >
              <tr>
                <th>#</th>
                <th className="datetable">TITLE</th>
                <th>IMAGE</th>
                <th>STATUS</th>

                <th>ACTION</th>
              </tr>
              <tbody id="tablebody">
                {responseData.length !== 0 &&
                  responseData.map((element, index) => (
                    <tr>
                      <td style={{ alignItems: "center" }}>
                        {element.categoryId}
                      </td>
                      <td>{element.categoryName}</td>

                      <td>
                        <img
                          style={{
                            width: "150px",
                            height: "150px",
                            padding: "10px",
                          }}
                          src={element.imagePath}
                        ></img>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteCategory(element.categoryId)}
                        >
                          delete
                        </button>
                      </td>

                      <td></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
