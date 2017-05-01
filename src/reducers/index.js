import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//combineReducers is a function that
//contain a mapping of all reducers
//and creat a application state for our application

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
