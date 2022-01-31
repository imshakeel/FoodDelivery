import { Link } from "react-router-dom";
import React from "react";
import "./DishDetail.css";

export default function DishDetail() {
  const dishname = localStorage.getItem("dishname");
  const dishid = localStorage.getItem("dishid");

  return (
    <div>
      <div className="dish">
        <div>
          <h4>{dishname}</h4>
        </div>
        <div>
          <Link to="/dish">
            <button>Back</button>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="containr">
          <div style={{ width: "200px", heigth: "150px" }}>
            <img
              style={{
                width: "160px",
                height: "130px",
                borderRadius: "4px",
              }}
              src={"https://picsum.photos/200/300"}
              alt="dsd"
            />
          </div>

          <hr className="hrline1" />
          <div>
            <h6>{dishname}</h6>
            <hr className="hrline2" />
            <span className="optiondish" style={{ display: "flex" }}>
              <span>
                Price : <span>12 $</span>
              </span>
              <span>
                Tax :<span>17 $</span>
              </span>
              <span>
                Prize:<span>1</span>
              </span>
              <span>
                Prize:<span>1</span>
              </span>
              <span>
                Prize:<span>1</span>
              </span>
              <span>
                Prize:<span>1</span>
              </span>
            </span>

            <h6>Variations</h6>
            <hr className="hrline3" />
            <div className="addons">
              <h6>Addons</h6>
              <hr className="hrline3" />
              <span className="optiondish2" style={{ display: "flex" }}>
                <span>
                  Price : <span>12 $</span>
                </span>
                <span>
                  Tax :<span>17 $</span>
                </span>
                <span>
                  Prize:<span>1</span>
                </span>
                <span>
                  Prize:<span>1</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
