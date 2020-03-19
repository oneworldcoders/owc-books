import React from "react";
import Card from "../Card/Card";
import "./BookList.css";

const BookList = props => {
  console.log(props.books, "kkkkkkkkkkkkkkkk");
  const { books } = props.books;
  const { items } = books;
  console.log(items, "itemmmmmmmmms");
  

  return (
    <div className="list">
      {items.map((book, index) => {
        return  <Card
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
      })}
    </div>
  );
};

export default BookList;


