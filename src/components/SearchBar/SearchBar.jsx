import React from "react";
import { Button } from "react-bootstrap";
import "./SearchBar.css";


const SearchBar = props => {
  return (
    <div search-bar="">
      <form onSubmit={props.handleSearch}>
        <input onChange={props.handleChange} type="text" />
        <Button className="s-button" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
