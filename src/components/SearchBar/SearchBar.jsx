import React from "react";
import { Button } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div search-bar="search">
      <form onSubmit={props.handleSearch}>
        <input onChange={props.handleChange} type="text" />
        <Button className="s-button" type="submit">
          Search
        </Button>
      </form>
      <span style={{ color: "white", fontSize: "1rem" }}>{props.error}</span>
    </div>
  );
};

export default SearchBar;
