import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewDepartments.css";
import Sidebar from "../sidebar/sidebar";
function ViewDepartments() {
  const [allRows, setAllRows] = useState([]);
  function SingleRow(props) {
    return (
      <>
        <tr>
          <td>{props.data.dept_name}</td>
          <td>{props.data.budget}</td>
          <td>{props.data.YOE}</td>
        </tr>
      </>
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/departments")
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
    <div style={{ textAlign: "center" }} className="ViewDepartmentCss">
      <Sidebar />
      <h1 style={{ fontFamily: "times new roman", color:"white"}}>All Department Records</h1>
      <table
        style={{ textAlign: "center", marginLeft: "35%", marginRight: "25%" }}
      >
        <tr className="ViewCoursesCssHeader">
          <td>Department Name</td>
          <td>Budget</td>
          <td>Year Of Establishment</td>
        </tr>
        {allRows}
      </table>
    </div>
  );
}

export default ViewDepartments;
