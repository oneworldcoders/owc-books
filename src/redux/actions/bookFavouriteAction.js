import { getItem, setItem } from "../../helpers/localstorage";
import { ADD_FAVOURITE, GET_FAVOURITE, REMOVE_FAVOURITE } from "./types";
import {ifObjectExist} from "../../helpers/index"


export const addFavourite = payload => dispatch => {
  const favourites = getItem("favourites") || [];

  if (ifObjectExist(favourites, payload)) return
  
  favourites.push({...payload, favourited: true });
  setItem("favourites", favourites);
  dispatch({
    type: ADD_FAVOURITE,
    payload: payload
  });
};

export const getFavourite = () => dispatch => {
  const favourites = getItem("favourites") || [];
  dispatch({
    type: GET_FAVOURITE,
    payload: favourites
  });
};

export const removeFavourite = id => dispatch => {
  let favourites = getItem("favourites") || [];
  favourites = favourites.filter(favourite => {
    return favourite.id !== id;
  });
  setItem("favourites", favourites);
  dispatch({
    type: REMOVE_FAVOURITE,
    payload: favourites
  });
};
