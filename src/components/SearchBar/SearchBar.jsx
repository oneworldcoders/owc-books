import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div search-bar="">
      <form onSubmit={props.handleSearch}>
        <input onChange={props.handleChange} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
