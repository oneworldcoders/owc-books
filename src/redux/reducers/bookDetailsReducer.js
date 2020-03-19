import { DETAILS_LOADING, BOOK_DETAILS } from "../actions/types";

const initialState = {
  bookDetails: {
    kind: "",
    id: "",
    etag: "",
    selfLink: "",
    volumeInfo: {},
    saleInfo: {},
    accessInfo: {}
  },
  loading: false
};

const getBookDetails = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_LOADING:
      return {
        ...state,
        loading: true
      };
    case BOOK_DETAILS:
      return {
        ...state,
        bookDetails: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default getBookDetails;
