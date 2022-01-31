import axios from "axios";
import React, { useState, useRef } from "react";
import slideImg1 from "../logo.png";

export default function AddNewCAtegory() {
  const [categoryName, setcategoryName] = useState(null);
  const [Image, setImage] = useState();
  const url = "http://18.223.28.200:82/api/Categories";

  function submit(e) {
    e.preventDefault();
    let formdata = new FormData();
    if (Image != null) {
      formdata.append("Image", Image);
      formdata.append("categoryName", categoryName);
    }
    console.log("formdata", formdata);
    console.log("hello");
    axios.post(url, formdata).then((res) => {
      console.log(res);
    });
  }
  console.log(Image, "path1");

  console.log(categoryName, "name");

  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="container">
        <div
          style={{
            paddingTop: "80px",
            paddingLeft: "30px",
            paddingBottom: "0px",
          }}
        >
          <p>Title</p>
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <input
            value={categoryName}
            onChange={(e) => setcategoryName(e.target.value)}
            style={{ width: "600px" }}
            type="text"
            className="form-control"
            placeholder="New Banner"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>

        <div>
          <label
            for="image"
            style={{ paddingTop: "30px", paddingLeft: "30px" }}
          >
            Banner Image
          </label>
          <p
            style={{
              paddingLeft: "30px",
              paddingTop: "20px",
            }}
          >
            <label for="image">
              <span
                style={{
                  border: "1px solid grey",
                  borderRadius: "3px",
                  paddingRight: "440px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                }}
              >
                Choose File
              </span>
              <span
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Browse
              </span>
            </label>
          </p>
        </div>
        <div>
          <input
            // value={ImagePath}
            onChange={(e) => {
              setImage(e.target.files);
            }}
            id="image"
            type="file"
            style={{ width: "200px" }}
            accept="image/*"
            hidden
            multiple
          />
        </div>
        <div style={{ paddingLeft: "70px", paddingTop: "25px" }}>
          <div
            style={{
              width: "500px",
              height: "250px",
              border: "1px solid grey",
              borderRadius: "3px",
            }}
          >
            <img
              style={{ width: "498px", height: "230px" }}
              src={require("../logo.png").default}
              alt="LOGo"
            />
          </div>
          <div style={{ padding: "30px" }}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}
