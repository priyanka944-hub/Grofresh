import React from "react";
import "./sales_report.css";

export default function SaleReportOverview() {
  return (
    <div>
      <div className="d-flex align-items-center gap-2 p-2">
        <img
          className="images"
          src="https://grofresh-admin.6amtech.com/public/assets/admin/svg/illustrations/credit-card.svg"
          alt="Image Description"
        ></img>
        <div>
          <h4>Sale Report Overview</h4>
          <span className="para">Admin: admin panel</span>
        </div>
      </div>

      <div className="slaes-box d-flex justify-content-around align-items-center flex-wrap gap-5">
        <div className="card-header">
          <div className="form-bold w-100 mb-2">Select Date Range</div>
          <form className="pt-3">
            <div className="row g-3 g-sm-4 g-md-3 g-lg-4">
              <div className="col-sm-6 col-md-4 col-lg-2">
                <select className="custom-select custom-select-sm text-capitalize min-h-45px">
                  <option disabled>---Select Branch---</option>
                  <option value="all">All Branch</option>
                  <option value="1">Main</option>
                  <option value="10">Second Branch</option>
                  <option value="11">Third Branch</option>
                  <option value="12">Dhaka</option>
                  <option value="13">Farmgate</option>
                </select>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="input-date-group">
                  <label className="input-label" for="start_date">
                    Start Date
                  </label>
                  <label className="input-date">
                    <input
                      type="date"
                      id="start_date"
                      name="start_date"
                      className="js-flatpickr form-control flatpickr-custom min-h-45px flatpickr-input"
                      placeholder="yy-mm-dd"
                    />
                  </label>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="input-date-group">
                  <label className="input-label" for="end_date">
                    End Date
                  </label>
                  <label className="input-date">
                    <input
                      type="text"
                      className="js-flatpickr form-control flatpickr-custom min-h-45px flatpickr-input"
                      id="end_date"
                      name="end_date"
                      placeholder="yy-mm-dd"
                    />
                  </label>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-4 __btn-row btn-row">
                <a href="#" id className="btn w-100 btn--reset min-h-45px">
                  Clear
                </a>
                <button
                  type="submit"
                  id="show_filter_data"
                  className="btn w-100 btn--primary min-h-45px"
                >
                  Show data
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="sales-container">
          <div className="row gap-5 place-items-center">
            <div className="sales-card col">
              <strong>Total Orders</strong>
              <span>0</span>
            </div>
            <div className="sales-card col">
              <strong>Total Item Oty</strong>
              <span>0</span>
            </div>
            <div className="sales-card col">
              <strong>Total Amount</strong>
              <span>0</span>
            </div>
          </div>
        </div>
        <div className="sales-table-container">
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
