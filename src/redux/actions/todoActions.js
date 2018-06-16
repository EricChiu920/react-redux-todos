import { ADD_TODO, REMOVE_TODO, GET_TODOS, GET_LOADED } from './actionTypes';

function handleTodos(data) {
  return {
    type: GET_TODOS,
    data,
  };
}

function handleAdd(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function handleRemove(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function handleLoad() {
  return {
    type: GET_LOADED,
    loaded: true,
  };
}

const apiUrl = 'http://localhost:3001';

export function getTodos() {
  return dispatch =>
    fetch(`${apiUrl}/api/todos`)
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .then(data => dispatch(handleLoad()))
      .catch(err => console.log('Something went wrong!!', err));
}

export function addTodo(task) {
  return dispatch =>
    fetch(`${apiUrl}/api/todos`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ task }),
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log('Something went wrong!!', err));
}

export function removeTodo(id) {
  return dispatch =>
    fetch(`${apiUrl}/api/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => dispatch(handleRemove(id)))
      .catch(err => console.log('Something went wrong!!', err));
}
