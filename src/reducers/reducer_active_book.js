//State argument is not application state, only the state
//this reducer is responsible for
export default function(state= null, action) {
  //if the action has a type of book selected will return the book
  //that was selected action not payload
  //if the action is anything else we just return the current state
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
  }
  return state
}
