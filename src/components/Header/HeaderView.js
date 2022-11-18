import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.png";
import styles from "./header.module.css";

let activeLink = styles.activeLink;
console.log(activeLink);

function HeaderView(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={logo}
          style={{
            display: "inline",
            width: "100px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />
        <a className="navbar-brand" href="#">
          Daily Mart India
        </a>
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
            <li className={`nav-item ${activeLink}`}>
              <a className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

HeaderView.propTypes = {};

export default HeaderView;
