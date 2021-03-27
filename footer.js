import React from "react";
import "./footer.styles.css";
import { Link } from "react-router-dom";
import "./lower.footer";
import LowerFooter from "./lower.footer";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-6 col-sm-3 text-center">
            <ul className="list-unstyled">
              <li>
                <Link to="/Banquet">Register for a Banquet Event</Link>
              </li>
              <li>
                <Link to="/Menu">Make a Dine in Reservation</Link>
              </li>
              <li>
                <Link to="/Culinary">Register for Culinary School</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-sm-3 text-center">
            <h4 className="footer-title" mb-2>
              Ulti-Meat Eats Pantry
            </h4>
            <a role="button" className="btn btn-link" href="tel:+12345678912">
              <i className="fa fa-phone" /> 1-234-567-8912
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" /> ultimeateatpantry@test
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-"></div>
        </div>
      </div>

      <LowerFooter />
    </footer>
  );
}

export default Footer;
