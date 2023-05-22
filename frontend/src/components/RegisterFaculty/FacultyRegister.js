import axios from "axios";
import React, { useState } from "react";
import "./facultyRegister.css";
import Sidebar from "../sidebar/sidebar";

function FacultyRegister() {
  const [finalDataFaculty, setFinalDataFaculty] = useState({
    f_id: "",
    password: "",
    name: "",
    course_id: "",
    dept_name: "",
    salary: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/faculties", finalDataFaculty)
      .then((res) => {
        console.log(res.data, "data received");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Sidebar />
      <div className="facultyRegister" style={{ backgroundColor:"rgb(224, 196, 32)", fontFamily:"times new roman" }}>
        <form action="">
          <h1 style={{ backgroundColor:"rgb(224, 196, 32)", fontFamily:"times new roman"}}>Register Faculty</h1>
          <h3
            style={{
              display: "inline-block",
              width: "170px",
              textAlign: "left",
              fontFamily: "times new roman",
            }}
          >
            Faculty ID :&nbsp;
          </h3>
          <input
            onChange={(event) => {
              const tempObj = { ...finalDataFaculty };
              tempObj.f_id = event.target.value;
              setFinalDataFaculty(tempObj);
            }}
          />
          <br />
          <h3
            style={{
              display: "inline-block",
              width: "170px",
              textAlign: "left",
              fontFamily: "times new roman"
            }}
          >
            Password :&nbsp;
          </h3>
          <input
            type="password"
            onChange={(event) => {
              const tempObj = { ...finalDataFaculty };
              tempObj.password = event.target.value;
              setFinalDataFaculty(tempObj);
            }}
          />
          <br />
          <h3
            style={{
              fontFamily: "times new roman",
              display: "inline-block",
              width: "170px",
              textAlign: "left",
            }}
          >
            {" "}
            Name :&nbsp;
          </h3>
          <input
            type="text"
            onChange={(event) => {
              const tempObj = { ...finalDataFaculty };
              tempObj.name = event.target.value;
              setFinalDataFaculty(tempObj);
            }}
          />
          <br />
          <h3
            style={{
              display: "inline-block",
              width: "170px",
              textAlign: "left",
              fontFamily: "times new roman"
            }}
          >
            Department Name : &nbsp;
          </h3>
          <input
            type="text"
            onChange={(event) => {
              const tempObj = { ...finalDataFaculty };
              tempObj.dept_name = event.target.value;
              setFinalDataFaculty(tempObj);
            }}
          />
          <br />


          <h3
            style={{
              display: "inline-block",
              width: "170px",
              textAlign: "left",
              fontFamily: "times new roman"
            }}
          >
            Course ID :&nbsp;
          </h3>
          <input
            onChange={(event) => {
              const tempObj = { ...finalDataFaculty };
              tempObj.course_id = event.target.value;
              setFinalDataFaculty(tempObj);
            }}
          />
          <br />
          <h3
            style={{
              display: "inline-block",
              width: "170px",
              textAlign: "left",
              fontFamily: "times new roman"
            }}
          >
            Salary :&nbsp;
          </h3>
          <input
            type="number"
            onChange={(event) => {
              const tempObj = { ...finalDataFaculty };
              tempObj.salary = event.target.value;
              setFinalDataFaculty(tempObj);
            }}
          />
          <br />
          <br />
          <button
            className="registerButton"
            style={{ margin: "10px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default FacultyRegister;
