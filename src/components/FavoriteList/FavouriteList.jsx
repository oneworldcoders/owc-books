import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { getFavourite } from "../../redux/actions/bookFavouriteAction";
import DefaultImg from "../../styles/assets/book-cover.gif";
import "./FavouriteList.css"

class Favourite extends Component {
  componentDidMount() {
    this.props.getFavourite();
  }
  render() {
    let NA = "Not Available";
    const { favourites } = this.props;

    return (
    <div className="fav">
      {favourites && favourites.favouriteBooks.map((favourite) => (
          <Card
            image={favourite.imageLinks.smallThumbnail || DefaultImg}
            title={favourite.title || NA}
            author={favourite.author || NA}
            published={favourite.publishedDate|| NA}
          />
      ))}
    </div>
    )
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect( mapStateToProps, { getFavourite })(Favourite);
