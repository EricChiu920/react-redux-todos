/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import { ADD_TODO, REMOVE_TODO, GET_TODOS } from '../actions/actionTypes';

const initialState = {
  todos: ['Add Todos'],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS: {
      return { ...state, todos: action.data };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }
    case REMOVE_TODO: {
      const todos = state.todos.filter(val => val._id !== action.id);
      return { todos };
    }
    default:
      return state;
  }
}

export default todoReducer;
