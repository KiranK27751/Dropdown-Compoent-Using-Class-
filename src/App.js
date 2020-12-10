import React, { useState, useEffect } from "react";
import "./style.css";
import { data } from "./constants/data";
import Dropdown from "./components/dropdown";

export default function App() {
  const key = [...Object.keys(data)].map(data => {
    return { name: data };
  });

  const [title, setTitle] = useState("");

  return (
    <div class="container">
      <span>
        Select Category:
        <Dropdown
          value={"Select catogery"}
          options={key}
          onChange={value => {
            setTitle(value);
          }}
        />
      </span>
      <span>
        Choose item:
        <Dropdown value={title} options={data[`${title}`]} />
      </span>
    </div>
  );
}
