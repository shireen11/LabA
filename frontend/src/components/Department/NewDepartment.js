import axios from "axios";
import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import "./NewDepartment.css";

function NewDepartment() {
  const [finalData, setFinalData] = useState({
    dept_name: "",
    budget: "",
    YOE: "",
  });
  function handleClick(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/departments", finalData)
      .then((res) => {
        console.log(res.data, "data received sucess");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Sidebar />
      <div className="newDepartment" style={{  backgroundColor:"rgb(224, 196, 32)",
  fontFamily:"times new roman"}}>
        <h1 style={{ backgroundColor:"rgb(224, 196, 32)",
  fontFamily:"times new roman" }}>Add New Department</h1>
        <h3 className="newDepartmentH3">Department Name :</h3>
        <input
          type="text"
          onChange={(event) => {
            const tempObj = { ...finalData };
            tempObj.dept_name = event.target.value;
            setFinalData(tempObj);
          }}
        />
        <br />
        <h3 className="newDepartmentH3">Budget :</h3>
        <input
          type="number"
          onChange={(event) => {
            const tempObj = { ...finalData };
            tempObj.budget = event.target.value;
            setFinalData(tempObj);
          }}
        />
        <br />
        <h3 className="newDepartmentH3">Year Of Estabilishment :</h3>
        <input
          type="number"
          onChange={(event) => {
            const tempObj = { ...finalData };
            tempObj.YOE = event.target.value;
            setFinalData(tempObj);
          }}
        />
        <br />
        <br />
        <button className="newDepartmentButton" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewDepartment;
