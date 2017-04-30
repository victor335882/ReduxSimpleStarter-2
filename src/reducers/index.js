import { combineReducers } from 'redux';
import BookReducer from './reducer_book'

//combineReducers is a function that
//contain a mapping of all reducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
