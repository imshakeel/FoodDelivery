import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import { sidebardata } from "./sidebarData";
import slideImg1 from "../logo.png";
import Header2 from "./Header2";

// const sty0px'

// let text='';
export default function Header() {
  return (
    <div className="heade">
      <div className="Sidebar">
        <img className="logo" src={slideImg1} alt="ss" />

        <ul className="sidebarlist">
          {sidebardata.map((val, key) => (
            <Header2 val={val} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
}
