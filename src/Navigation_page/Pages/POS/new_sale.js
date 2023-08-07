import React, { useState } from "react";
import "./new_sale.css";
import { useEffect } from "react";

const arrayOfProducts = [
  {
    id: 1,
    name: "Corn Flakes",
    price: 600.45,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-07-06-60e49d0fa3d40.png",
  },
  {
    id: 2,
    name: "Rodent Sheriff Pest Control - Ultra-Pure Peppermint Spray",
    price: 16.15,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b68421782.png",
  },
  {
    id: 3,
    name: "Cuccio SOMATOLOGY Bergamot Balancing Oil",
    price: 18.0,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b5f70abeb.png",
  },
  {
    id: 4,
    name: "Liquid Dial Gold Antimicrobial Soap",
    price: 105,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b54655186.png",
  },
  {
    id: 5,
    name: "NIVEA Refreshing Wild Berries and Hibiscus",
    price: 8,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b4dd15ecb.png",
  },
  {
    id: 6,
    name: "Pre de Provence Luxury Gift Box (Set of 9)",
    price: 14,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b454a5232.png",
  },
  {
    id: 7,
    name: "Sparkling Ice, Black Cherry Sparkling Water",
    price: 150,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b3f04ff0e.png",
  },
  {
    id: 8,
    name: "Pure Leaf Iced Tea, Unsweetened Black Tea",
    price: 17.1,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b329d5e6e.png",
  },
  {
    id: 9,
    name: "Fresh Rui Fish 5kg",
    price: 35,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b24da5282.png",
  },
  {
    id: 10,
    name: "Beef Bone Inn",
    price: 5,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1b1428ff0c.png",
  },
  {
    id: 11,
    name: "Fresh Chicken 2kg",
    price: 15,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1aed03adce.png",
  },
  {
    id: 12,
    name: "Ladies Finger",
    price: 2,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1adf923fd8.png",
  },
  {
    id: 13,
    name: "Potato",
    price: 2,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1ad6d6a1c1.png",
  },
  {
    id: 14,
    name: "Orange",
    price: 10,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1ac62a9d97.png",
  },
  {
    id: 15,
    name: "Green Grapes",
    price: 15,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1aba085b3f.png",
  },
  {
    id: 16,
    name: "banana",
    price: 9.5,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-22-60d1ab024a1f8.png",
  },
  {
    id: 17,
    name: "Fla-Vor-Ice Popsicle Variety Pack",
    price: 10,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-21-60d0c2aa79e2c.png",
  },
  {
    id: 18,
    name: "FIJI Natural Artesian Water",
    price: 20,
    imageUrl:
      "https://grofresh-admin.6amtech.com/storage/app/public/product/2021-06-21-60d0c1bbbeba7.png",
  },
];

export default function NewSale() {
  const [data, setData] = useState(arrayOfProducts);
  useEffect(() => {
    setData(arrayOfProducts);
  }, []);

  return (
    <div className="new_sale_container d-flex justify-content-center p-4 gap-2">
      <div className="newsale-left-box">
        <h5>
          <strong>Product Section</strong>
        </h5>
        <div className="dropdown">
          <select name="branch" className="form-control">
            <option>All Categories</option>
            <option>Fruits and Vegetables</option>
            <option> Meat and Fish</option>
            <option>Cooking</option>
            <option>Beverages</option>
          </select>
          <input
            type="search"
            className="form-control"
            placeholder="Search by product name"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {data.map((each) => {
            return (
              <div className="product-card col">
                <img
                  src={each.imageUrl}
                  className="products-image"
                  alt={each.name}
                />
                <strong className="product-text">{each.name}</strong>
                <span>{each.price}$</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="newsale-right-box">
        <h5>
          <strong>Billing Section</strong>
        </h5>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <select className="form-control mb-2">
            <option>Walk in...</option>
          </select>
          <button className="btn btn-1  form-control">
            Add New Customer
          </button>
        </div>
        <strong>Select Branch</strong>
        <select className="form-control input">
          <option>Main</option>
        </select>
        <div className="">
          <table
            className="table table-hover"
            style={{ width: "100%", margin: "auto" }}
          >
            <thead className="table-info text-center">
              <tr>
                <th>Item </th>
                <th>Qty </th>
                <th>Price </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div>
            <dl className="row" style={{ color: "#677788" }}>
              <dt className="col-6">Sub total :</dt>
              <dd className="col-6" style={{ textAlign: "end" }}>
                0.00$
              </dd>
              <dt className="col-6">Product discount :</dt>
              <dd className="col-6" style={{ textAlign: "end" }}>
                -0.00$
              </dd>
              <dt className="col-6">Extra Discount :</dt>
              <dd className="col-6" style={{ textAlign: "end" }}>
                -0.00$
              </dd>
              <dt className="col-6">Tax :</dt>
              <dd className="col-6" style={{ textAlign: "end" }}>
                0.00$
              </dd>
              <dt className="col-6">Total :</dt>
              <dd
                className="col-6"
                style={{
                  textAlign: "end",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                0.00$
              </dd>
            </dl>
          </div>
        </div>
        <h6>
          <strong>Payment Method</strong>
        </h6>
        <button className="btn btn-dark m-2">Card</button>
        <button className="btn btn-light">Cash</button>
        <div className="row gap-2 " style={{ width: "95%", margin: "auto" }}>
          <button className="col btn btn-outline-danger">Cancel Order</button>
          <button className="col btn btn-2">Place Order</button>
        </div>
      </div>
    </div>
  );
}
