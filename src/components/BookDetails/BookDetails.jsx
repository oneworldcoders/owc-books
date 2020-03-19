import React, { Component } from "react";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bookDetails } from "../../redux/actions/bookDetailsAction";
import Spinner from "../Spinner/Spinner";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
// import DefaultImg from "../../styles/assets/book-cover.gif";

import "./BookDetails.css";

class Details extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.bookDetails(id);
  }

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
          <ListGroup className="list-group-flush">
            <ListGroupItem className="author">{volumeInfo.title}</ListGroupItem>
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
  details: state.bookDetails
});

export default compose(
  withRouter,
  connect(mapStateToProps, { bookDetails })
)(Details);
