import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import BookList from "../BookList/BookList"
import { connect } from "react-redux";
import { searchBooks } from "../../redux/actions/searchAction";
import Spinner from "../Spinner/Spinner";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputs: ""
    };
  }

  handleChange = event => {
    this.setState({ searchInputs: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault();
    const { searchInputs } = this.state;
    this.props.searchBooks(searchInputs);
  };

  render() {
    const {books: { loading }} = this.props
    if (loading) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
    return (
      <div className="layout">
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.searchBooks
});

export default connect(mapStateToProps, { searchBooks })(Layout);
