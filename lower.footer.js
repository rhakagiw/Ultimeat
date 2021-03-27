import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./lower.footer.styles.css";

const currentYear = new Date().getFullYear();

const LowerFooter = (props) => {
  return (
    <div>
      <Nav className="lower-footer mt-3">
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Banquet</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Culinary School</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact Us</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
           <span className="small"> &copy;{currentYear} Designed by Rhakagi Wahhab{" "}</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default LowerFooter;
