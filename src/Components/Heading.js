import React, { useEffect, useState } from "react";
import { rightSide } from "./sidebarData";
import { connect } from "react-redux";
import "./Sidebar.css";
import { Link } from "react-router-dom";

let titleBo;
let value;

function Heading({ name }) {
  console.log(name, "name");
  // const [iss, setiss] = useState();
  // useEffect(() => {
  //   value = localStorage.getItem("chart");
  //   console.log(value, "dd");
  //   console.log(value, "value");
  //   setiss(value);
  // }, []);
  // console.log(iss, "kk");
  return (
    <div>
      <div className="col-xl-  block2">
        <h3 className="tabletitle">{name}</h3>

        <Link to={"/map"}>
          <div className="map">{rightSide[0].icon}</div>
        </Link>
        <div className="logIn">{rightSide[1].icon}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Heading);
