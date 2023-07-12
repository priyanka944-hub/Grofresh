import React from "react";
import "./limited_stocks.css";


export default function Limitedstock(){
  return (
    <div className="text">
      <div class="d-flex gap-4 flex-column">
        <div>
          <h4>Limited Stocks</h4>
          <p>The products are shown in this list which quantity is below 1</p>
        </div>

        <div className="card-body p-3">
          <div
            className="search-container d-flex justify-content-start"
            style={{ width: "40%" }}
          >
            <input type="search" className="search-bar" />
            <buttton className="search-btn btn btn-secondary">search</buttton>
          </div>
        </div>

        <div className="table-container">
          <table className="table table-hover">
            <thead className="table-success">
              <tr className="table-head">
                <th scope="col">SL</th>
                <th scope="col">Product name</th>
                <th scope="col">Selling Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
          </table>

          <div class="text-center">
            <img
              src="https://grofresh-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
              class="rounded"
              alt="..."
              width="400"
              height="300"
            />
            <p>No data to show</p>
          </div>
        </div>
      </div>
    </div>
  );
}
