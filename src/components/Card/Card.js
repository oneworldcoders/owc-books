import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.published}</p>
      </div>
    </div>
  );
};

export default Card;
