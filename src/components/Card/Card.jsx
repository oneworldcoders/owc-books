import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt="" />
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
