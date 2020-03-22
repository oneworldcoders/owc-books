import React, { Component } from "react";
import FavouriteLayout from "../components/FavoriteList/FavouriteLayout";
import "../styles/App.css";

class FavoritePage extends Component {
  render() {
    return (
      <div className="App">
        <FavouriteLayout />
      </div>
    );
  }
}

export default FavoritePage;
