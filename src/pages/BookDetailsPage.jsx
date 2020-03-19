import React, { Component } from "react";
import Details from "../components/BookDetails/BookDetails";
import "../styles/App.css";

class BookDetails extends Component {
  render() {
    return (
      <div className="App">
        <Details />
      </div>
    );
  }
}

export default BookDetails;
