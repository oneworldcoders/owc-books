import React, { Component } from "react";
import FavouriteList from "../FavoriteList/FavouriteList";
import "./FavouriteLayout.css";

class FavouriteLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="fav-layout">Your Favorite Books</div>
        <FavouriteList />
      </div>
    );
  }
}

export default FavouriteLayout;
