import "./App.css";
import react, { useState, useEffect } from "react";
import Header from "./Components/Header";
import TableHeading from "./Components/TableHeading";
import Heading from "./Components/Heading";
import AllOrderTable from "./Components/AllOrderTable";
import RestaurentList from "./Components/RestaurentList";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import DishItem from "./Components/DishItem";
import { connect } from "react-redux";
import * as UserAction from "./redux/action/userAction";
import DishDetail from "./Components/DishDetail";
import OrdreDetailView from "./Components/OrdreDetailView";
import GoogleMap from "./Components/GoogleMap";
import Category from "./Components/Category";
import AddNewCAtegory from "./Components/AddNewCAtegory";
import RestApi from "./Components/RestApi";
import DeliveryBoy from "./Components/DeliveryBoy";
import AddNewDeliveryBoy from "./Components/AddNewDeliveryBoy";

const title = "Order";
const orderList = "Order List";
const ordernumbers = 23;

let tabletitle = "order";
function App({ state, dispatch }) {
  useEffect(() => {
    // dispatch({ type: "SET_NAME", payload: "asad" });
    dispatch({ type: "NUMBER", payload: 74546846854 });
  }, []);
  console.log("name", state);
  // setTitleBody("dfdfdddf");
  // console.log(titleBody);
  const home = () => {
    return <h>this is home page</h>;
  };

  return (
    <>
      <div class="containe">
        <div class="header">
          <Heading />
        </div>
        <div class="sidebar">
          <Header />
        </div>
        <div class="bodyarea">
          {/* <TableHeading
            headingtitle={title}
            ordernumber={ordernumbers}
            orderList={orderList}
          /> */}
          {/* <AllOrderTable /> */}

          <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route exact path="/res" element={<RestaurentList />} />
            <Route exact path="/" element={<AllOrderTable />} />
            <Route exact path="/dish" element={<DishItem />} />
            <Route exact path="/dishdetail" element={<DishDetail />} />
            <Route exact path="/Category" element={<Category />} />
            <Route exact path="/addnewcategoey" element={<AddNewCAtegory />} />
            <Route exact path="/restapi" element={<RestApi />} />
            <Route exact path="/deliveryboy" element={<DeliveryBoy />} />
            <Route
              exact
              path="/addnewdeliveryboy"
              element={<AddNewDeliveryBoy />}
            />
            <Route
              exact
              name="orderdishview"
              path="/:as"
              element={<OrdreDetailView />}
            />
            <Route exact path="/map" element={<GoogleMap />} />
            <Route path="/all/home" element={<home />} />

            {/* <RestaurentList /> */}
          </Routes>
        </div>
        {/* <div class="footer">footer</div> */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(App);
