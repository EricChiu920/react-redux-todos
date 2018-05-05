import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  state = {
    todos: ['Eat', 'Sleep', 'Go Home'],
  };

  render() {
    const todos = this.state.todos.map((task, i) =>
      <Todo key={i} task={task} />);

    return (
      <ul>
        {todos}
      </ul>
    );
  }
}

export default TodoList;
