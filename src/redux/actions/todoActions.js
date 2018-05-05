import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export function addTodo(task) {
  return {
    type: ADD_TODO,
    task,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
