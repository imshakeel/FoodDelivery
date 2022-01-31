import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import "./Dashboard.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { Link } from "react-router-dom";

const pendding = "PENDDING";
const confirm = "CONFIRMED";
const processing = "PROCESSING";
const outOfDelivery = "OUT OF DELIVERY";
export default function DashBoard() {
  return (
    <div className="container">
      <div style={{ padding: "30px", fontSize: "23px", fontWeight: "500" }}>
        <h>Welcome, Admin</h>
      </div>

      <div style={{ paddingLeft: "50px" }}>
        <span>
          {" "}
          <BarChartIcon />
        </span>
        <span style={{ fontSize: "17px", fontWeight: "bold" }}>
          {" "}
          Dashboard order statistics
        </span>
      </div>

      <div
        style={{ paddingLeft: "40px", paddingTop: "20px" }}
        className="allordersatistics"
      >
        {/* <Link to={"/all"}> */}
        <div id="item1">
          <p
            style={{
              color: "white",
              fontSize: "13px",
              fontWeight: "500",
              paddingTop: "22px",
              paddingLeft: "22px",
            }}
          >
            {pendding}
          </p>
          <p
            style={{
              paddingLeft: "22px",
              color: "white",
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            2
            <span style={{ paddingLeft: "150px" }}>
              <ShoppingCartIcon style={{ fontSize: "30px" }} />
            </span>
          </p>
        </div>
        {/* </Link> */}
        {/* <Link to={"/all"}> */}
        <div id="item2">
          <p
            style={{
              color: "white",
              fontSize: "13px",
              fontWeight: "500",
              paddingTop: "22px",
              paddingLeft: "22px",
            }}
          >
            {confirm}
          </p>
          <p
            style={{
              paddingLeft: "22px",
              color: "white",
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            2
            <span style={{ paddingLeft: "150px" }}>
              <CheckCircleIcon style={{ fontSize: "30px" }} />
            </span>
          </p>
        </div>
        {/* </Link> */}
        <div id="item3">
          <p
            style={{
              color: "white",
              fontSize: "13px",
              fontWeight: "500",
              paddingTop: "22px",
              paddingLeft: "22px",
            }}
          >
            {processing}
          </p>
          <p
            style={{
              paddingLeft: "22px",
              color: "white",
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            2
            <span style={{ paddingLeft: "150px" }}>
              <AccessTimeIcon style={{ fontSize: "30px" }} />
            </span>
          </p>
        </div>
        <div id="item4">
          <p
            style={{
              color: "white",
              fontSize: "13px",
              fontWeight: "500",
              paddingTop: "22px",
              paddingLeft: "22px",
            }}
          >
            {outOfDelivery}
          </p>
          <p
            style={{
              paddingLeft: "22px",
              color: "white",
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            2
            <span style={{ paddingLeft: "150px" }}>
              <PedalBikeIcon style={{ fontSize: "30px" }} />
            </span>
          </p>
        </div>
        <div id="item5">large </div>
      </div>
    </div>
  );
}
