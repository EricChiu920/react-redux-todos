import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [],
  id: 0,
};

function todoReducer(state = { initialState }, action) {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...newState,
        todos: [...newState.todos, { id: action.id, task: action.task }],
      };
    }
    case REMOVE_TODO: {
      const todos = newState.todos.filter(todo => todo.id !== action.todo);
      return todos;
    }
    default: {
      return state;
    }
  }
}

export default todoReducer;
