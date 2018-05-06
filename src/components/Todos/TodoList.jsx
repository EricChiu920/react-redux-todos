import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.object),
};

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos,
  };
}

export default connect(mapStateToProps)(TodoList);
