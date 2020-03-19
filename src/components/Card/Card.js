import React from "react";
import "./Card.css";
import DefaultImg from "../../styles/assets/book-cover.gif"

const Card = props => {
  let NA = "Not Available"
  return (
    <div className="card">
      <img src={props.image || DefaultImg} alt="" />
      <div className="desc">
        <h2>{props.title || NA }</h2>
        <h3>Author: {props.author || NA }</h3>
        <p>Published Date: {props.published || NA }</p>
      </div>
    </div>
  );
};

export default Card;
