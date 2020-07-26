import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "../../styles/assets/owc.jpg";
import "./Navbar.css";

const Header = () => {
  return (
    <Navbar className="nav">
      <Navbar.Brand>
        <Link className="link" to="/">
          <img style={{ width: "2rem", margin: ".3rem" }} alt="" src={logo} />
          OWC-Books
        </Link>
      </Navbar.Brand>
      <Navbar.Brand className="right">
        <Link className="link2" to="/favorite">
          ❤ <span>Favorite Books</span>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
