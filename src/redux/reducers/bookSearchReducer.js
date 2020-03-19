import { SEARCH_BOOKS, SEARCH_LOADING } from "../actions/types";

const initialState = {
  books: {
    kind: null,
    totalItems: null,
    items: []
  },
  loading: false
};

const searchBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default searchBooksReducer;
