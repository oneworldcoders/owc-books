import { getItem, setItem } from "../../helpers/localstorage";
import { ADD_FAVOURITE, GET_FAVOURITE, REMOVE_FAVOURITE } from "./types";
import { ObjectExist } from "../../helpers/index";

export const addFavourite = bookObject => dispatch => {
  const favourites = getItem("favourites") || [];

  if (ObjectExist(favourites, bookObject)) return;

  favourites.push({ ...bookObject, favourited: true });
  setItem("favourites", favourites);
  dispatch({
    type: ADD_FAVOURITE,
    payload: bookObject
  });
};

export const getFavourite = () => dispatch => {
  const favourites = getItem("favourites") || [];
  dispatch({
    type: GET_FAVOURITE,
    payload: favourites
  });
};

export const removeFavourite = bookObject => dispatch => {
  
  let favourites = getItem("favourites") || [];

  favourites = favourites.filter(favourite => {
      return (favourite.title !== bookObject.title &&
      favourite.publishedDate !== bookObject.publishedDate)
  });
  setItem("favourites", favourites);
  dispatch({
    type: REMOVE_FAVOURITE,
    payload: favourites
  });
};
