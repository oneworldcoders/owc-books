import React from "react";
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap";
import "./Navbar.css";



const Header = () => {
  return (
    <Navbar className="nav">
      <Navbar.Brand><Link className="link" to="/">OWC-Books</Link></Navbar.Brand>
    </Navbar>
  );
};

export default Header;
