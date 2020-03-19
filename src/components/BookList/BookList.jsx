import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./BookList.css";
import DefaultImg from "../../styles/assets/book-cover.gif";

const BookList = props => {
  let NA = "Not Available";
  const { books } = props.books;
  const { items } = books;
  return (
    <div className="list">
      {items.map(book => (
        <Link to={`/details/${book.id}`} key={book.id}>
          <Card
            id={book.id}
            image={book.volumeInfo.imageLinks.thumbnail || DefaultImg}
            title={book.volumeInfo.title || NA}
            author={book.volumeInfo.authors || NA}
            published={book.volumeInfo.publishedDate || NA}
          />
        </Link>
      ))}
    </div>
  );
};

export default BookList;
