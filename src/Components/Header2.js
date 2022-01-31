import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useEffect, setChartKey } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const element = <ArrowDropDownIcon id="demo" />;
let value = "";
// let titles = "88";
function Header2({ dispatch, val, key }) {
  const [state, setstate] = useState(false);
  // const [sName, setsName] = useState("s");
  // console.log(sName, "sname");
  // titles = sName;
  // console.log(titles, "titles");
  // console.log(titles, "tit");
  // console.log(name, "asdfds");
  // const [titletable, settitletable] = useState();
  // useEffect(() => {
  //   localStorage.setItem("chart", titletable);
  // });
  // useEffect(() => {
  // dispatch({ type: "SET_NAME", payload: "asad" });
  // dispatch({ type: "SET_NAME", payload: sName });
  // }, []);

  // useEffect(() => {
  // let persistChart = localStorage.getItem("chart");
  // persistChart = "dddddf" ;
  // }, []);
  return (
    <div>
      <li
        // onClick={() =>
        //   val.title.length <= 1 &&
        //   (window.location.pathname = val.Link)
        // }
        className="rows"
        key={key}
      >
        {/* <li style={styleRestaurent }>{console.log(sidebardata[3])}</li> */}
        <div className="icon">{val.icon}</div>&nbsp;
        <div
          className="title"
          style={{ paddingBottom: "24px" }}
          onClick={() => (val.title.length > 1 ? setstate(!state) : state)}
        >
          {/* . */}
          {state ? (
            <div>
              {val.title.map((ele, index) => (
                <li
                  style={{
                    color: val.title.length > 1 && "#f74d4a",
                    marginBottom: "12px",
                  }}
                >
                  <Link
                    className="link"
                    to={val.Link[index]}
                    id={
                      window.location.pathname === val.Link[index] && "active"
                    }
                  >
                    {/* . */}
                    <span
                      onClick={() =>
                        dispatch({ type: "SET_NAME", payload: ele })
                      }
                    >
                      {ele}
                    </span>
                  </Link>
                </li>
              ))}
            </div>
          ) : (
            <span>
              <Link
                id={window.location.pathname === val.Link[0] && "active"}
                className="link"
                to={val.Link[0]}
              >
                <span
                  onClick={() => {
                    dispatch({ type: "SET_NAME", payload: val.title[0] });
                  }}
                >
                  {val.title[0]}
                </span>
              </Link>
            </span>
          )}
        </div>
        <span>
          {/* .
          .
          . */}
          {
            (value =
              val.title[0] === "Type"
                ? element
                : "" || val.title[0] === "Restaurent"
                ? element
                : "")
          }
        </span>
      </li>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   name: state.name,
// });
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapDispatchToProps)(Header2);
