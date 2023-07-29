import React from "react";
import "./add_new.css";

export default function AddNewDeliveryMan() {
  return (
    <div classname="newdelivery">
      <p>
        <strong>Add New Deliveryman</strong>
      </p>

      <p className="para">General Information</p>
      <div className="card-body row p-3">
        <div className="col">
          <div className="row">
            <div className="form-group col">
              <label for="First Name">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex:First name"
              />
            </div>
            <div className="form-group col">
              <label for="Last Name">Last Name</label>
              <input
                type="text2"
                className="form-control"
                placeholder="Ex:Last name"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="Phone Number">Phone Number</label>
            <input
              type="Number"
              className="form-control"
              placeholder="Ex:017**********"
            />
            <small id="text2" className="form-text text-muted"></small>
          </div>
          <div>
            <label for="Branch">Branch</label>
            <br></br>
            <select>
              <option>All</option>
              <option>Main</option>
              <option>Second Branch</option>
              <option>Third Branch</option>
              <option>Dhaka</option>
              <option>Farmgate</option>
            </select>
          </div>
          <div>
            <label for="IdentityType">Identity Type</label>
            <br></br>
            <select>
              <option>Passport</option>
              <option>Driving Licence</option>
              <option>Nid</option>
              <option>Store id id</option>
            </select>
            <div className="form-group">
              <label for="IdentityNumber">Identity Number</label>
              <input
                type="text2"
                className="form-control"
                placeholder="Ex:DH-23434-LS"
              />
              <small id="text2" className="form-text text-muted"></small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>
              Delivery man Image <span className="text-danger">Ratio(1:1)</span>
            </label>
            <input type="file" className="form-control" />
          </div>
          <div className="form-group">
            <label>Identity Image</label>
            <input type="file" className="form-control" />
          </div>

          <p className="parag">Account Information</p>
        </div>
      </div>
    </div>
  );
}
