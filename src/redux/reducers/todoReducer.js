import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = ['Add todos'];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      var newState = { ...state };
      return [ ...newState, action.todo ];
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val.id !== action.id);
      return { ...state, todos };
    default:
      return state;
  }
}

export default todoReducer;
