import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TODO:
      return {
        ...newState,
        todos: [...newState.todos, action.todo],
      };
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val.id !== action.id);
      return { ...state, todos };
    default:
      return state;
  }
}

export default todoReducer;
