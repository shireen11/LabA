import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewCourses.css";
import Sidebar from "../sidebar/sidebar";
function ViewCourses() {
  const [allRows, setAllRows] = useState([]);
  function SingleRow(props) {
    return (
      <>
        <tr>
          <td>{props.data.course_id}</td>
          <td>{props.data.title}</td>
          <td>{props.data.credits}</td>
          <td>{props.data.dept_name}</td>
        </tr>
      </>
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => {
        console.log("Res", res.data);

        for (let i = 0; i < res.data.length; i++) {
          setAllRows((arr) => arr.concat(<SingleRow data={res.data[i]} />));
        }
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <div style={{ textAlign: "center", }} className="ViewDepartmentCss">
      <Sidebar />
      <h1 style={{ fontFamily: "times new roman", color:"white" }}>All Courses Record</h1>
      <table
        style={{ textAlign: "center", marginLeft: "35%", marginRight: "25%", WebkitTextFillColor:"white" ,backgroundColor:"rgb(224, 196, 32)", fontFamily:"times new roman"}}
      >
        <tr className="ViewDepartmentCssHeader "style={{backgroundColor:"rgb(224, 196, 32)", fontFamily:"times new roman", WebkitTextFillColor:"white"}} >
          <td>Course Id</td>
          <td>Title</td>
          <td>Credits</td>
          <td>Department Name</td>
        </tr>
        {allRows} 
      </table>
    </div>
  );
}

export default ViewCourses;
