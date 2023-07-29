import React from "react";
import "./order_report.css";

export default function OrderReportOverview() {
  return (
    <div>
      <div className="d-flex align-items-center gap-1 p-1">
        <img
          src="https://grofresh-admin.6amtech.com/public/assets/admin/img/order-img.png"
          className="imageone"
          alt=""
        ></img>
        <h5>OrderReportOverview </h5>
      </div>
      <div className="display-flex">
        <div className="d-flex gap-2">
          <span>Admin:</span>
          <a href="#" class="text--primary-2 ">
            admin panel
          </a>
          <span>Date</span>
          <a href="#" class="text--primary-2">
            2023-07-01 - 2023-07-30
          </a>
          <br></br>
        </div>
        <p className="para5">
          <strong>Show Data By Date Range</strong>
        </p>

        <div className="slaes-box d-flex align-items-end flex-wrap gap-5">
          <div className="d-flex flex-column col">
            <label>Start date</label>
            <input type="date" style={{ color: "lightgray" }} />
          </div>
          <div className="d-flex flex-column col">
            <label>End date</label>
            <input type="date" style={{ color: "lightgray" }} />
          </div>
          <button
            className="btn btn-secondary col"
            style={{ backgroundColor: "#107980" }}
          >
            Show
          </button>
        </div>

        <div className="cards-order row gap-3">
          <div className="greencard col">
            <span>Delivered</span>
          </div>
          <div className="pinkcard col">
            <span>Returned</span>
          </div>
          <div className="bluecard col">
            <span>Failed</span>
          </div>
          <div className="lightcard col">
            <span>Canceled</span>
          </div>
        </div>
      </div>
    </div>
  );
}
