import React, { Component } from "react";
import Favourite from "./FavouriteList";

class FavouriteLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="fav-layout">Your Favorite Books</div>
        <Favourite books={this.props.books} />
      </div>
    );
  }
}

export default FavouriteLayout;
