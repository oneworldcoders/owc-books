import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} className="card">
        <img
          style={{ width: "80%", height: "80%", margin: "auto" }}
          src={this.props.image}
          alt=""
        />
        <div className="desc">
          <h2>{this.props.title}</h2>
          <h3>Author: {this.props.author}</h3>
          <p>Published Date: {this.props.published}</p>
        </div>
      </div>
    );
  }
}

export default Card;
