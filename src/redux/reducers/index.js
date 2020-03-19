import { combineReducers } from 'redux';
import searchBooksReducer from './bookSearchReducer';
import getBookDetails from './bookDetailsReducer';


export default combineReducers({ 
  searchBooks: searchBooksReducer,
  bookDetails: getBookDetails
 });