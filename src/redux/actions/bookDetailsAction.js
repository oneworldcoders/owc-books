import axios from "axios";
import { DETAILS_LOADING, BOOK_DETAILS } from "./types";

const baseUrl = "https://www.googleapis.com/books/v1/volumes";

export const detailsLoading = type => ({
  type
});

export const bookDetails = bookId => dispatch => {
  dispatch(detailsLoading(DETAILS_LOADING));
  axios
    .get(`${baseUrl}/${bookId}`)
    .then(res => {
      console.log(res, "roooooooooooooo");
      dispatch({
        type: BOOK_DETAILS,
        payload: res.data
      });
    })
    .catch(error => console.log(error));
};
