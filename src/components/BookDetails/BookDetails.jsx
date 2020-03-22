import React, { Component } from "react";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bookDetails } from "../../redux/actions/bookDetailsAction";
import Spinner from "../Spinner/Spinner";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  addFavourite,
  getFavourite,
  removeFavourite
} from "../../redux/actions/bookFavouriteAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookDetails.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "heart"
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.bookDetails(id);
    this.props.getFavourite();
  }

  componentDidUpdate(prevProps) {
    const {
      details: {
        bookDetails: { favourited }
      }
    } = this.props;
    const {
      details: {
        bookDetails: { favourited: prevFavourited }
      }
    } = prevProps;

    if (prevFavourited !== favourited && favourited === true) {
      this.setState({ className: "clicked" });
    }
  }

  handleToggle = () => {
    const {
      details: {
        bookDetails: { volumeInfo }
      }
    } = this.props;

    if (this.state.className === "heart") {
      this.setState({ className: "clicked" });

      this.props.addFavourite(volumeInfo);

      toast.success("Added to favourite", {
        toastId: 1,
        className: "tost"
      });
    } else if (this.state.className === "clicked") {
      this.setState({ className: "heart" });

      this.props.removeFavourite(volumeInfo);
      toast.success("Removed from favourite", {
        toastId: 1,
        className: "tost"
      });
    }
  };

  render() {
    const {
      details: {
        bookDetails: { volumeInfo }
      }
    } = this.props;
    const {
      details: { loading }
    } = this.props;

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
            <img
              src={volumeInfo.imageLinks && volumeInfo.imageLinks.small}
              alt=""
            />

            <ListGroupItem className="author">
              {volumeInfo.title}{" "}
              <Link to="#" onClick={this.handleToggle}>
                <FontAwesomeIcon
                  size="lg"
                  className={this.state.className}
                  icon={faHeart}
                />
              </Link>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Text
              dangerouslySetInnerHTML={{ __html: volumeInfo.description }}
            />
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
  connect(mapStateToProps, {
    bookDetails,
    addFavourite,
    getFavourite,
    removeFavourite
  })
)(Details);
