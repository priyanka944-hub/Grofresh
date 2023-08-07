import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../CSS/Productreviews.css";
import logo from "../../../assest/productreviews.png";
import img1 from "../../../assest/prolist1.png";
import img2 from "../../../assest/prolist1.png";
import img3 from "../../../assest/prolist1.png";
import { StarFill } from "react-bootstrap-icons";
import { useState } from "react";

const list = [
  {
    SNo: "1",
    imageUrl: img1,
    productName: "Corn Flakes",
    ratings: "3",
    ratingText: "ok",
    customerName: "New Test",
    customerumber: "+8801621720000",
  },
  {
    SNo: "2",
    imageUrl: img1,
    productName: "Green Grapes",
    ratings: "5",
    ratingText:
      "The products and pricing was good. Received the products well in time.",
    customerName: "Fatema Subarna",
    customerumber: "+8801885576622",
  },
  {
    SNo: "3",
    imageUrl: img1,
    productName: "Corn Flakes",
    ratings: "3",
    ratingText: "nice product",
    customerName: "Fatema Subarna",
    customerumber: "+8801885576622",
  },
  {
    SNo: "4",
    imageUrl: img1,
    productName: "Oranges",
    ratings: "5",
    ratingText: "nice product",
    customerName: "Fatema Subarna",
    customerumber: "+8801885576622",
  },
];

export default function ProductReviews() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = () => {
    setProducts(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const filter = products.filter((product) => {
      return (product.SNo === inputValue || product.productName.toLowerCase().includes(inputValue.toLowerCase()))
    })
    setProducts(filter)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className=" Productreview">
        <div className="page-header">
          <h1 className="page-title">
            <span>
              <img src={logo} className="logo" alt="logo" />
            </span>
            <span>Product Reviews</span>
            <span className="badge badge-soft-secondary">9</span>
          </h1>
        </div>

        <div className="card">
          <div className="card-header border-0">
            <div className="card--header justify-content-end">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Ex: Search by Id or name"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value)
                      if (e.target.value === '') {
                        setProducts(list)
                      }
                    }}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="table-responsive datatable-custom">
            <table className="table table-borderless  card-table">
              <thead>
                <tr className="prod-head">
                  <th>SL</th>
                  <th>Product name</th>
                  <th>Ratings</th>
                  <th>Customer info</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {products.map((each) => {
                  return (
                    <tr key={each.SNo}>
                      <td>{each.SNo}</td>
                      <td>
                        <span>
                          <img
                            src={each.imageUrl}
                            className="img"
                            alt={each.productName}
                          />
                        </span>
                        <span>{each.productName}</span>
                      </td>
                      <td>
                        <span className="rate">{each.ratings}</span>
                        <span className="rate rates">
                          <StarFill />
                        </span>
                        <div>{each.ratingText}</div>
                      </td>
                      <td>
                        <div>
                          <b>
                            <span>{each.customerName} </span>
                          </b>
                        </div>
                        <div>
                          <span>{each.customerumber}</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <label className="form-check form-switch">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input "
                            // checked
                          />
                        </label>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
