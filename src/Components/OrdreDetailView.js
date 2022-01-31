import React, { useEffect, useState } from "react";
import "./OrderDetailView.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MapIcon from "@mui/icons-material/Map";
import { useLocation } from "react-router-dom";
import Select from "react-dropdown-select";
import axios from "axios";

export default function OrdreDetailView(props) {
  const [deliveryBoyList, setDeliveryBoyList] = useState();
  const [selectedBoy, setSelectedBoy] = useState();
  console.log("selectedBoy", selectedBoy);
  var getid = localStorage.getItem("id");
  var paymentType = localStorage.getItem("paymentType");
  var orderStatus = localStorage.getItem("orderStatus");

  const getDeliveryBoyList = async () => {
    const responce = await axios.get(
      "http://18.223.28.200:82/api/DeliveryBoy?contactNo=0"
    );
    console.log("deliveryBoy", responce.data.DeliveryBoyDetails);

    const deliveryBoy = responce.data.DeliveryBoyDetails;
    const dropDownDeliveryList = [];
    const deliveryBoyName = deliveryBoy.map((item) => item.name);

    deliveryBoyName.map((item) => {
      dropDownDeliveryList.push({ value: item, label: item });
    });

    setDeliveryBoyList(dropDownDeliveryList);
  };
  useEffect(() => {
    getDeliveryBoyList();
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <h4 style={{ paddingTop: "30px", paddingLeft: "30px" }}>
              Order <span>#{getid}</span>
            </h4>
          </div>
          <h6
            style={{
              paddingLeft: "40px",
              paddingTop: "15px",
            }}
          >
            OrderDetail
          </h6>

          <hr
            style={{
              width: "96%",
              position: "relative",
              left: "40px",
              color: "rgb(230, 225, 225)",
            }}
          />
          <p
            style={{
              paddingLeft: "40px",
              color: "grey",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Order Note :
            <span style={{ paddingLeft: "500px" }}>Payment Method : </span>
            <span>{paymentType}</span>
            <p style={{ paddingLeft: "590px" }}>
              <span>
                Order Type : <span>{orderStatus}</span>
              </span>{" "}
            </p>
          </p>
          <div style={{ paddingLeft: "40px", paddingTop: "20px" }}>
            <span style={{ color: "grey" }}>kj</span>
            <span style={{ color: "grey" }}></span>
            <p>
              <span style={{ textDecoration: "underline", color: "grey" }}>
                Variation
              </span>
              <span style={{ paddingLeft: "380px" }}>30</span>
              <span style={{ paddingLeft: "140px" }}>1</span>
              <span style={{ paddingLeft: "130px" }}>30</span>
            </p>
            <span
              style={{ position: "relative", bottom: "10px", color: "grey" }}
            >
              Type :{" "}
            </span>
            <span
              style={{ position: "relative", bottom: "10px", color: "grey" }}
            >
              Normal
            </span>{" "}
            <span style={{ paddingLeft: "340px" }}>30</span>
            <span style={{ paddingLeft: "140px" }}>1</span>
            <span style={{ paddingLeft: "128px" }}>30</span>
            <p style={{ position: "relative", bottom: "10px", color: "grey" }}>
              <span>Price : </span>
              <span>10</span>
            </p>
          </div>
          <div>
            <div style={{ paddingLeft: "400px" }}>
              <p>
                <span style={{ paddingLeft: "40px" }}>Item Price:</span>
                <span style={{ paddingLeft: "260px", color: "grey" }}>46</span>
              </p>

              <p>
                <span style={{ paddingLeft: "20px" }}>Addon Cost:</span>
                <span style={{ paddingLeft: "272px", color: "grey" }}>4</span>
              </p>
              <hr style={{ color: "black" }} />
              <p>
                <span style={{ paddingLeft: "42px" }}>SubTotal:</span>
                <span style={{ paddingLeft: "275px", color: "grey" }}>41</span>
              </p>
              <p>
                <span>Coupon Discount:</span>
                <span style={{ paddingLeft: "255px", color: "grey" }}>42</span>
              </p>
              <p>
                <span style={{ paddingLeft: "20px" }}>Delivery Fee:</span>
                <span style={{ paddingLeft: "272px", color: "grey" }}>34</span>
              </p>
              <hr style={{ color: "rgb(230, 225, 225)" }} />
              <p>
                <span style={{ paddingLeft: "70px" }}>Total:</span>
                <span style={{ paddingLeft: "275px", color: "grey" }}>700</span>
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingLeft: "80px",
            paddingTop: "120px",
          }}
        >
          <div>
            <Select
              onChange={(data) => {
                setSelectedBoy(data[0].value);
              }}
              options={deliveryBoyList}
            />
            <h6>Customer</h6>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <span>
              <AccountCircleIcon
                style={{
                  width: "35px",
                  height: "35px",
                  color: "rgb(173, 171, 171)",
                }}
              />
            </span>
            <span style={{ fontWeight: "500px", color: "grey" }}>
              {" "}
              Sehya Eng
            </span>
          </div>
          <hr style={{ color: "rgb(230, 225, 225)" }} />
          <div style={{ paddingTop: "20px" }}>
            <h6>Contact Info</h6>
          </div>
          <div>
            <span>@ </span>
            <span style={{ fontWeight: "500px", color: "grey" }}>
              {" "}
              shakeel.whitestone@gmail.com
            </span>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <span>
              <PhoneAndroidIcon
                style={{
                  color: "rgb(173, 171, 171)",
                }}
              />
            </span>
            <span style={{ fontWeight: "500px", color: "grey" }}>
              +91 9898989878{" "}
            </span>
          </div>
          <hr style={{ color: "rgb(230, 225, 225)" }} />
          <hr
            style={{
              color: "rgb(230, 225, 225)",
              position: "relative",
              right: "350px",
              bottom: "120px",
            }}
          />
          <div style={{ paddingTop: "7px" }}>
            <h6>Delivery Address</h6>
          </div>
          <div>
            <span style={{ fontWeight: "500px", color: "grey" }}>
              Aziz Sarkar
            </span>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <span style={{ fontWeight: "500px", color: "grey" }}>
              +919876543210
            </span>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <span style={{ fontWeight: "500px", color: "grey" }}>Home</span>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <span>
              <MapIcon style={{ fontSize: "18px", color: "#fc6a57" }} />
            </span>
            <span style={{ color: "#fc6a57 " }}>
              {" "}
              Ainusbag Road Dhaka District BD
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
