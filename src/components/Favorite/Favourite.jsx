import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getFavourite } from "../../redux/actions/bookFavouriteAction";
import "./Favourite.css"

class Favourite extends Component {
  componentDidMount() {
    this.props.getFavourite();
    console.log(this.props, "this.props");

  }

  render() {
    return (
      <Table  className="container favour" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Published Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect( mapStateToProps, {getFavourite} )(Favourite);
