
import { ADD_FAVOURITE, GET_FAVOURITE, REMOVE_FAVOURITE } from "../actions/types";

const initialState = {
  favouriteBooks: []
}
const favouriteBooks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteBooks: [...state.favouriteBooks, action.payload]
      };
    case GET_FAVOURITE:
        return {
          ...state,
          favouriteBooks: action.payload,
        };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favouriteBooks: action.payload,
      };
    default:
      return state;
  }
};
export default favouriteBooks;
