import axios from "axios";
import { SEARCH_BOOKS, SEARCH_LOADING } from "./types";

const baseUrl = "https://www.googleapis.com/books/v1/volumes";

export const searchLoading = type => ({
  type
});

export const searchBooks = keyword => dispatch => {
  dispatch(searchLoading(SEARCH_LOADING));
  axios
    .get(`${baseUrl}?q=${keyword}`)
    .then(res =>
      dispatch({
        type: SEARCH_BOOKS,
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
