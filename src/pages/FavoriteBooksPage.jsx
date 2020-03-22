import React, { Component } from "react";
import Favorite from "../components/Favorite/Favourite";
import "../styles/App.css";

class FavoritePage extends Component {

  render() {
    return (
      <div className="App">
        <Favorite />
      </div>
    );
  }
}

export default FavoritePage;
