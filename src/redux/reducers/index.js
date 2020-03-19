import { combineReducers } from 'redux';
import searchBooksReducer from './searchReducer'


export default combineReducers({ 
  searchBooks: searchBooksReducer
 });