import React, { useState } from "react";
import "./third_party.css";

export default function ThirdParty() {
  const [data, setData] = useState("PaymentMethod");

  return (
    <div className="heading">
      <div className="d-flex align-items-center">
        <img
          src="https://grofresh-admin.6amtech.com/public/assets/admin/img/third-party.png"
          className="w--20"
          alt=""
        ></img>
        <p>Thirdparty</p>
      </div>

      <div className="d-flex gap-5 mb-4" style={{ fontWeight: "bolder" }}>
        <span className={data === "PaymentMethod" && "style"}>
          PaymentMethods
        </span>
        <span>SocialMediaLogin </span>
        <span>MailConfig </span>
        <span>SMSConfig </span>
        <span>GoogleMapAPIs</span>
        <span>Recaptcha </span>
        <span>PushNotification</span>
      </div>
      <span style={{ fontWeight: "bolder" }}>SocialMediaChat</span>
      <div className="d-flex justify-content-center gap-4 p-4">
        <div className="column-top col">
          <h6>
            <b>PAYMENT METHOD</b>
          </h6>
          <span>
            <b>Cash On Delivery</b>
          </span>
          <div className="d-flex">
            <label className="form-check mr-2 mr-md-4">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="1"
              ></input>
              <span className="form-check-label text--title pl-2">Active</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="0"
              ></input>
              <span className="form-check-label text--title pl-2">
                Inactive
              </span>
            </label>
          </div>
          <div className="d-flex justify-content-end" style={{ width: "100%" }}>
            <button type="submit" className="btn btn-primary px-5">
              Save
            </button>
          </div>
        </div>
        <div className="column-top col">
          <h6>
            <b>PAYMENT METHOD</b>
          </h6>
          <span>
            <b>Digital Payment</b>
          </span>
          <div className="d-flex">
            <label className="form-check mr-2 mr-md-4">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="1"
              ></input>
              <span className="form-check-label text--title pl-2">Active</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="0"
              ></input>
              <span className="form-check-label text--title pl-2">
                Inactive
              </span>
            </label>
          </div>
          <div className="d-flex justify-content-end" style={{ width: "100%" }}>
            <button type="submit" className="btn btn-primary px-5">
              Save
            </button>
          </div>
        </div>
        <div className="column-top col">
          <h6>
            <b>PAYMENT METHOD</b>
          </h6>
          <span>
            <b>Offline Payment</b>
          </span>
          <div className="d-flex">
            <label className="form-check mr-2 mr-md-4">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="1"
              ></input>
              <span className="form-check-label text--title pl-2">Active</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="0"
              ></input>
              <span className="form-check-label text--title pl-2">
                Inactive
              </span>
            </label>
          </div>
          <div className="d-flex justify-content-end" style={{ width: "100%" }}>
            <button type="submit" className="btn btn-primary px-5">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 d-flex flex-column gap-3">
        <div className="d-flex gap-3">
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">SSLCOMMERZ</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/sslcomz.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">RAZORPAY</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/razorpay.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">PAYPAL</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/paypal.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">STRIPE</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/stripe.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">SENANG PAY</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="	https://grofresh-admin.6amtech.com/public/assets/admin/img/senangpay.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">PAYSTACK</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/paystack.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">BKASH</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/bkash.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">PAYMOB</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/paymob.png"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">FLUTTERWAVE</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/fluterwave.png
                "
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
          <div className="column-top col">
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <span className="payment-headers">MERCADOPAGO</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                className="payment--gateway-img"
                src="https://grofresh-admin.6amtech.com/public/assets/admin/img/MercadoPago_(Horizontal).svg"
                alt="public"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Store Id"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Store Password"
            />
            <div
              className="d-flex justify-content-end"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success px-4">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
