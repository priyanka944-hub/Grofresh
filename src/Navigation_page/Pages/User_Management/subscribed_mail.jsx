import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../../assest/subscriber.png";
import "../../CSS/Subscribed.css";

const mails = [
  { SNo: "1", email: "6amtech@gmail.com", subscribedAt: "	2022/12/09" },
  { SNo: "2", email: "tester@gmail.com", subscribedAt: "	2022/12/09" },
  { SNo: "3", email: "mobarak@gmail.com", subscribedAt: "	2022/12/09" },
  { SNo: "4", email: "test@gmail.com", subscribedAt: "	2022/12/09" },
];

export default function SubscribedEmails() {
  const [data, setData] = useState(mails);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);    
    if (e.target.value === "") {
      setData(mails);
    } else {
      const filter = data.filter((each) => each.email.includes(search));
      setData(filter);
    }
  };

  return (
    <>
      <div className=" Subscribedemails">
        <div className="page-header">
          <h1 className="page-title">
            <span>
              <img src={logo} className="logo" alt="logo" />
            </span>
            <span>Subscribed Customers</span>
            <span className="badge">9</span>
          </h1>
        </div>

        <div className="card">
          <div className="card-header border-0">
            <div className="card--header ">
              <form>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control search"
                    placeholder="Search email address"
                    onChange={handleSearch}
                    value={search}
                  />
                  <div className="input-group-append">
                    <button type="submit" className="input-group-text">
                      {" "}
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="table-responsive" style={{width:'95%',margin:"auto"}}>
            <table className="table table-hover table-borderless ">
              <tr className="thead-light">
                <th>SL</th>
                <th>Email</th>
                <th>Subscribed At</th>
              </tr>

              <tbody>
                {data.map((each) => {
                  return (
                    <tr key={each.SNo}>
                      <td> {each.SNo}</td>
                      <td>
                        <td>{each.email}</td>
                      </td>
                      <td>{each.subscribedAt} </td>
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
