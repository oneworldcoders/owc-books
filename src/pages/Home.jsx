import React, { Component } from "react";
import Header from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import "../styles/App.css";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout />
      </div>
    );
  }
}

export default HomePage;
