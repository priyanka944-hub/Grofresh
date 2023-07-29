import React from "react";
import "./page_setup.css";
import { FaBeer } from "react-icons/fa";

export default function () {
  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <img
          src="https://grofresh-admin.6amtech.com/public/assets/admin/img/business-setup.png"
          width={23}
          height={23}
        ></img>
        <h5>
          <strong>Page Setup</strong>
        </h5>
        <ul>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    About Us <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cancellation Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Refund Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </ul>
        <div className="col-8 edit" contentEditable>
          <h4> What is Lorem Ipsum?</h4>
          <p className="para1">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h5>Why do we use it?</h5>
          <p className="para2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
    </div>
  );
}
