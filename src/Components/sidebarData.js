import React from "react";
import HomeIcon from "@mui/icons-material/Phone";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import DiningIcon from "@mui/icons-material/Dining";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import CategoryIcon from "@mui/icons-material/Category";
import AddCardIcon from "@mui/icons-material/AddCard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MapIcon from "@mui/icons-material/Map";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HailIcon from "@mui/icons-material/Hail";

const myStyle = {
  width: "18px",
  height: "18px",
  // color:'rgb(75, 74, 74)'0
};

export const sidebardata = [
  {
    title: ["Dashboard"],
    icon: <HomeIcon style={myStyle} />,
    Link: ["/dashboard"],
  },
  {
    title: ["Delivery Boy"],
    icon: <HailIcon style={myStyle} />,
    Link: ["/deliveryboy"],
  },

  {
    title: ["Food", "AllOrder", "Restaurent", "Dish", "Category"],
    icon: <BorderAllIcon style={myStyle} />,
    Link: ["", "/all", "/res", "/dish", "/category"],
  },

  {
    title: ["Grocery", "data"],
    icon: <DiningIcon style={myStyle} />,
    Link: ["", "/data"],
  },

  {
    title: ["Medicine"],
    icon: <AdUnitsIcon style={myStyle} />,
    Link: ["/all"],
  },

  {
    title: ["Health"],
    icon: <CategoryIcon style={myStyle} />,
    Link: ["/res"],
  },

  {
    title: ["Bakery Cake"],
    icon: <AddCardIcon style={myStyle} />,
    Link: ["/home"],
  },

  {
    title: ["Meat And fish"],
    icon: <Inventory2Icon style={myStyle} />,
    Link: ["/product"],
  },
  {
    title: ["Women "],
    icon: <HomeIcon style={myStyle} />,
    Link: ["/home"],
  },

  {
    title: ["men"],
    icon: <BorderAllIcon style={myStyle} />,
    Link: ["/borderAllIcon"],
  },
  {
    title: ["baby"],
    icon: <Inventory2Icon style={myStyle} />,
    Link: ["/product"],
  },
  {
    title: ["Doctor"],
    icon: <HomeIcon style={myStyle} />,
    Link: ["/home"],
  },

  {
    title: ["Diagonistic"],
    icon: <BorderAllIcon style={myStyle} />,
    Link: ["/borderAllIcon"],
  },
  {
    title: ["barber"],
    icon: <BorderAllIcon style={myStyle} />,
    Link: ["/borderAllIcon"],
  },
  {
    title: ["Parlour", "data", "all"],
    icon: <BorderAllIcon style={myStyle} />,
    Link: ["/borderAllIcon"],
  },
];

const rightSideStyle = {
  width: "35px",
  height: "35px",
  color: "rgb(173, 171, 171)",
};
export const rightSide = [
  {
    title: "map",
    icon: <MapIcon style={rightSideStyle} />,
  },
  {
    title: "login",
    icon: <AccountCircleIcon style={rightSideStyle} />,
  },
];
