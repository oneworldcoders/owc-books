import axios from "axios";
import { DETAILS_LOADING, BOOK_DETAILS } from "./types";
import { ObjectExist } from "../../helpers/index";

const baseUrl = "https://www.googleapis.com/books/v1/volumes";

export const detailsLoading = type => ({
  type
});

export const bookDetails = bookId => (dispatch, getState) => {
  dispatch(detailsLoading(DETAILS_LOADING));
  axios
    .get(`${baseUrl}/${bookId}`)
    .then(res => {

      const favouriteBooks = getState().favourites.favouriteBooks
      const bookDetailsFromAPI = res.data.volumeInfo

      const objExist = ObjectExist(favouriteBooks, bookDetailsFromAPI);
      dispatch({
        type: BOOK_DETAILS,
        payload: objExist  ? { ...res.data, favourited: true } : { ...res.data, favourited: false }
      });
    })
    .catch(error => console.log(error));
};
