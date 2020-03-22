import React, { Component } from "react";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bookDetails } from "../../redux/actions/bookDetailsAction";
import Spinner from "../Spinner/Spinner";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {addFavourite, getFavourite } from "../../redux/actions/bookFavouriteAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookDetails.css";
// import DefaultImg from "../../styles/assets/book-b1.jpg";

class Details extends Component {
  constructor(props) {
    super(props);
    // const { details: { bookDetails: { favorited} }} = props
    this.state = {
      className: "heart"
    }
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.bookDetails(id);
    // this.props.getFavorite()
  }

  handleToggle = () => {
    if (this.state.className === "heart") {
      this.setState({ className: "clicked" });
      const {
        details: {
          bookDetails: { volumeInfo }
        }
      } = this.props;
        
      this.props.addFavourite(volumeInfo)

      toast.success("Added to favourite", {
        toastId: 1,
        className: "tost"
      });
    } else if (this.state.className === "clicked") {
      this.setState({ className: "heart" });
      toast.success("Removed from favourite", {
        toastId: 1,
        className: "tost"
      });
    }
  };

  render() {
    // console.log(this.props.details, 'bookDetails')
    const {
      details: {
        bookDetails: { volumeInfo }
      }
    } = this.props;
// console.log(volumeInfo.imageLinks, 'rwanda')
    const {
      details: { loading }
    } = this.props;
    console.log(this.props, 'this.props')

    if (loading) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
    return (
      <div className="details">
        <Card className="details-card">
          <ListGroup className="list-group-flush align">
            <ListGroupItem className="author">
              {volumeInfo.title}{" "}
              <Link to="" onClick={this.handleToggle}>
                <FontAwesomeIcon
                  size="lg"
                  className={this.state.className}
                  icon={faHeart}
                />
              </Link>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Text>{volumeInfo.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="author">
              {volumeInfo.authors}
            </ListGroupItem>
            <ListGroupItem>{volumeInfo.publishedDate}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link className="link-d" to="/">
              Go back
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  details: state.bookDetails,
  favourites: state.favourites
});

export default compose(
  withRouter,
  connect(mapStateToProps, { bookDetails, addFavourite, getFavourite })
)(Details);
