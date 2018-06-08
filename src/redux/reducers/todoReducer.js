import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...newState,
        todos: [...newState.todos, action.todo],
      };
    }
    case REMOVE_TODO: {
      const todos = newState.todos.filter(val => val !== newState.todos[action.id]);
      return { todos };
    }
    default:
      return state;
  }
}

export default todoReducer;
