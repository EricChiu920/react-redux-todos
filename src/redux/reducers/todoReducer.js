import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: ['Add Todos'],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }
    case REMOVE_TODO: {
      const todos = state.todos.filter(val => val !== state.todos[action.id]);
      return { todos };
    }
    default:
      return state;
  }
}

export default todoReducer;
