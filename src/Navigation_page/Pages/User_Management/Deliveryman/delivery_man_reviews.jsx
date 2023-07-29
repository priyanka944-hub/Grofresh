import React from "react";
import * as Icon from "react-bootstrap-icons";
import "./delivery_man_reviews.css";

export default function DeliveryManReviews() {
  return (
    <div className="deliveryman" style={{ overflow: "a" }}>
      <div className="d-flex justify-content-start align-items-center gap-2 m-2">
        <Icon.StarFill color="gold" size={25} />
        <h3 className="heading">Review List</h3>
      </div>
      <div className="delivery-container">
        <div className="paragraph d-flex justify-content-between align-items-center">
          <p>Review List Table</p>
          <div className="col-6 d-flex m-2">
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

        <div className="table-container d-flex justify-content-center">
          <div className="table-container">
            <table className="table table-hover">
              <thead className="table-info">
                <tr className="table-head">
                  <th>SL</th>
                  <th>Delivery Man</th>
                  <th>Customer</th>
                  <th>Review</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Anwar Ahmed</td>
                  <td>Aziz Sarker</td>
                  <td>He is good</td>
                  <td>
                    3 <Icon.StarFill color="skyblue" size={10} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
