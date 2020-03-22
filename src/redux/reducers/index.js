import { combineReducers } from 'redux';
import searchBooksReducer from './bookSearchReducer';
import getBookDetails from './bookDetailsReducer';
import favouriteBooks from './bookFavouriteReducer';


export default combineReducers({ 
  searchBooks: searchBooksReducer,
  bookDetails: getBookDetails,
  favourites: favouriteBooks
 });