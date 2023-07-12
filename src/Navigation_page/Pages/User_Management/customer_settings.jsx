import React from "react";
import "./customer_settings.css";

export default function CustomerSettings() {
  return (
    <div className="customer">
      <h4><strong>Customer Settings</strong></h4>
      <div className="d-flex flex-column gap-5">
        <div className="d-flex justify-content-center gap-5 main-box">
          <div className="d-flex align-items-center justify-content-between box">
            <label className="form-check-label" htmlFor="check1">
              Customer Wallet :
            </label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              ></input>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between box">
            <label className="form-check-label" for="check2">
              Customer Loyalty Point:
            </label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="check2" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between box">
            <label className="form-check-label" for="check3">
              Customer Referrer Earning:
            </label>
            <div className="form-check form-switch">
              <div className="d-flex">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="check3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-box">
          <div
            style={{ borderBottom: "1px solid #e7eaf3", paddingBottom: "10px" }}
          >
            <strong> Customer Loyalty Point Settings</strong>
          </div>
          <div>
            <div className="d-flex gap-3">
              <div className="col">
                <label>1 USD Equal To How Much Loyalty Points</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col">
                <label>Percentage Of Loyalty Point On Order Amount</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col">
                <label>Minimum Loyalty Points To Transfer Into Wallet</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="third-box">
          <div
            style={{ borderBottom: "1px solid #e7eaf3", paddingBottom: "10px" }}
          >
            <strong>Customer Referrer Settings</strong>
          </div>
          <div>
            <div className="row">
              <div className="col-6">
                <label>One Referrer Equal To How Much USD</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ width: "90%", margin: "auto" }}
        >
          <button className="btn btn-success">Submit</button>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "90%", margin: "auto" }}
        >
          <p>Copyright © 2022, groFresh</p>
          <div className="d-flex gap-4">
            <p>Store Settings</p>
            <p>Profile</p>
            <p>Home</p>
            <p className="version">Software version 7.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
