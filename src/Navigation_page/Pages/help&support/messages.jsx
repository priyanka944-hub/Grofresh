import React, { useState } from "react";
import "./messages.css";
import * as Icon from "react-bootstrap-icons";
import image from "../../../assest/img1.jpg";

export default function Messages() {
  const [data, setData] = useState("");

  const renderData = () => {
    switch (data) {
      case "John":
        return (
          <div className="p-2">
            <div
              className={`d-flex p-2 gap-2`}
              style={{ width: "98%", borderRadius: "10px" }}
            >
              <img src={image} height={50} style={{ borderRadius: "50%" }} />
              <div className="d-flex flex-column">
                <strong>John Ali Panel</strong>
                <span style={{ fontSize: "15px" }}>Customer</span>
              </div>
            </div>{" "}
          </div>
        );

        break;
      case "Pili":
        return (
          <div className="p-2">
            <div
              className={`d-flex p-2 gap-2`}
              style={{ width: "98%", borderRadius: "10px" }}
            >
              <img src={image} height={50} style={{ borderRadius: "50%" }} />
              <div className="d-flex flex-column">
                <strong>Pili 123</strong>
                <span style={{ fontSize: "15px" }}>Customer</span>
              </div>
            </div>
          </div>
        );

        break;
      case "Aziz":
        return (
          <div className="p-2">
            <div
              className={`d-flex p-2 gap-2`}
              style={{ width: "98%", borderRadius: "10px" }}
            >
              <img src={image} height={50} style={{ borderRadius: "50%" }} />
              <div className="d-flex flex-column">
                <strong>Aziz Sarker</strong>
                <span style={{ fontSize: "15px" }}>Customer</span>
              </div>
            </div>{" "}
          </div>
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="Messages">
      <div className="d-flex m-3 gap-3 align-items-center">
        <img
          src="https://grofresh-admin.6amtech.com/public/assets/admin/img/messages.png"
          alt="message"
          height={30}
        />
        <h3>Messages</h3>
      </div>
      <div className="messages-chatbox">
        <div className="messages-left-chat">
          <div className="d-flex m-3 gap-2" style={{ width: "100%" }}>
            <img src={image} height={50} style={{ borderRadius: "50%" }} />
            <div className="d-flex flex-column">
              <strong>Admin Panel</strong>
              <span style={{ fontSize: "15px" }}>Master Admin</span>
            </div>
          </div>
          <input
            type="text"
            className="form-control mb-2"
            style={{ width: "95%", backgroundColor: "#f3f4f5" }}
            placeholder="Search"
          />
          <div
            className={`d-flex p-2 gap-2 ${data === "John" && "johnChat"}`}
            style={{ width: "100%", borderRadius: "10px" }}
            onClick={() => setData("John")}
          >
            <img src={image} height={50} style={{ borderRadius: "50%" }} />
            <div className="d-flex flex-column">
              <strong>John Ali Panel</strong>
              <span style={{ fontSize: "15px" }}>Customer</span>
            </div>
          </div>
          <div
            className={`d-flex p-2 gap-2 ${data === "Pili" && "johnChat"}`}
            style={{ width: "100%", borderRadius: "10px" }}
            onClick={() => setData("Pili")}
          >
            <img src={image} height={50} style={{ borderRadius: "50%" }} />
            <div className="d-flex flex-column">
              <strong>Pili 123</strong>
              <span style={{ fontSize: "15px" }}>Customer</span>
            </div>
          </div>
          <div
            className={`d-flex p-2 gap-2 ${data === "Aziz" && "johnChat"}`}
            style={{ width: "100%", borderRadius: "20px" }}
            onClick={() => setData("Aziz")}
          >
            <img src={image} height={50} style={{ borderRadius: "50%" }} />
            <div className="d-flex flex-column">
              <strong>Aziz Sarker</strong>
              <span style={{ fontSize: "15px" }}>Customer</span>
            </div>
          </div>
        </div>
        <div className="messages-right-chat">
          {data.length > 0 ? (
            renderData()
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="	https://grofresh-admin.6amtech.com/public/assets/admin/img/view-conv.png" />
              <span style={{ color: "#677788" }}>
                Click from the customer list to view conversation
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
