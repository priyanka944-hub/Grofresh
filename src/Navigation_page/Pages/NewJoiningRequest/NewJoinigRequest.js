import React from "react";
import { useState } from "react";
import "./NewJoiningRequest.css";
import image from "../../../assest/img1.jpg";
import id from "../../../assest/idimage.png";

import { CheckSquare, XSquare } from "react-bootstrap-icons";

export default function NewJoiningRequest() {
  const [data, setData] = useState("first");

  const conditionalRender = () => {
    switch (data) {
      case "first":
        return (
          <div className="first-container">
            <div
              className="d-flex p-3"
              style={{
                border: "1px solid lightgrey",
                width: "100%",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <div className="col-6 d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name or Phone or Email"
                />
                <button
                  className="btn btn-info"
                  style={{ backgroundColor: "#01684b", color: "white" }}
                >
                  Search
                </button>
              </div>
            </div>
            <div
              className="p-3"
              style={{
                border: "1px solid lightgrey",
                width: "100%",
                overflowX: "scroll",
              }}
            >
              <table className="table table-hover">
                <thead className="table-info">
                  <tr className="table-head">
                    <th scope="col">SL</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact Info</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Identity Type</th>
                    <th scope="col">Identity Number</th>
                    <th scope="col">Identity Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img src={image} alt="img" className="image-icon" />
                      Blue Head
                    </td>
                    <td>
                      blue@gmail.com<br></br>
                      +8801621141122
                    </td>
                    <td>Main </td>

                    <td>Passport</td>
                    <td>123@34</td>
                    <td>
                      <img src={id} alt="img" className="idimage" />
                      <img src={id} alt="img" className="idimage" />
                    </td>
                    <td>Pending</td>
                    <td>
                      <CheckSquare color="#107980" height={25} width={25} />
                      <XSquare color="#ff6d6d" height={25} width={35} />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <img src={image} alt="img" className="image-icon" />
                      Jhon Blue
                    </td>
                    <td>
                      jb@gmail.com<br></br>
                      +8801559888000
                    </td>
                    <td>All Branch</td>
                    <td>Passport</td>
                    <td>1891</td>
                    <td>
                      <img src={id} alt="img" className="idimage" />
                      <img src={id} alt="img" className="idimage" />
                    </td>
                    <td>Pending</td>
                    <td>
                      <CheckSquare
                        color="#107980"
                        height={25}
                        width={25}
                        className="hover-check"
                      />
                      <XSquare color="#ff6d6d" height={25} width={35} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
        break;
      case "second":
        return (
          <div className="second-container">
            <div
              className="d-flex p-3"
              style={{
                border: "1px solid lightgrey",
                width: "100%",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <div className="col-6 d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name or Phone or Email"
                />
                <button className="btn btn-success">Search</button>
              </div>
            </div>
            <div
              className="p-3"
              style={{ border: "1px solid lightgrey", width: "100%" }}
            >
              <table className="table table-hover">
                <thead className="table-info">
                  <tr className="table-head">
                    <th scope="col">SL</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact Info</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Identity Type</th>
                    <th scope="col">Identity Number</th>
                    <th scope="col">Identity Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <img src={image} alt="img" className="image-icon" />
                      Will Beearh
                    </td>
                    <td>will@gmail.com +8801997844643</td>
                    <td>Main </td>
                    <td>Passport</td>
                    <td>177@446</td>
                    <td>
                      <img src={id} alt="img" className="idimage" />
                      <img src={id} alt="img" className="idimage" />
                    </td>
                    <td>Denied</td>
                    <td>
                      <CheckSquare color="#107980" height={25} width={25} />
                      <XSquare color="#ff6d6d" height={25} width={35} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="newJoining">
      <h4>New Joining Request</h4>
      <div className="d-flex">
        <p
          onClick={(e) => setData("first")}
          className={data === "first" && "first"}
          style={{ fontSize: "15px" }}
        >
          Pending Delivery Man
        </p>
        <p
          onClick={(e) => setData("second")}
          className={data === "second" && "second"}
          style={{ fontSize: "15px" }}
        >
          Denied Delivery Man
        </p>
      </div>
      {conditionalRender()}
      <div
        className="d-flex justify-content-between"
        style={{ width: "90%", margin: "auto" }}
      ></div>
    </div>
  );
}
