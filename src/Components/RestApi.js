import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function RestApi() {
  // get input value using usestate
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(Name);

  const url = "https://jsonplaceholder.typicode.com/posts";
  //   const [Data, setData] = useState([]);
  const [value, setvalue] = useState({
    id: "",
    title: "",
    name: "",
  });
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        userId: parseInt(value.id),
        title: value.title,
        body: value.name,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  const Changehandler = (e) => {
    const newData = { ...value };
    console.log(newData, "newData");
    newData[e.target.id] = e.target.value;
    setvalue(newData);
    console.log(newData, "object");
  };
  return (
    <div>
      <div>
        <form onSubmit={(e) => submit(e)}>
          <input
            onChange={(e) => Changehandler(e)}
            value={value.id}
            id="id"
            type="text"
            placeholder="id"
          />
          <input
            onChange={(e) => Changehandler(e)}
            value={value.title}
            id="title"
            type="text"
            placeholder="title"
          />
          <input
            onChange={(e) => Changehandler(e)}
            value={value.name}
            id="name"
            type="text"
            placeholder="name"
          />
          <button>submit</button>
        </form>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {console.log(Name, email)}
      </div>
    </div>
  );
}
