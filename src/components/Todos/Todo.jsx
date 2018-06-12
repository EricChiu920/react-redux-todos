import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ task, removeTodo }) => (
  <li>{task}<button onClick={removeTodo}>X</button></li>
);

Todo.defaultProps = {
  task: 'All done',
};

Todo.propTypes = {
  task: PropTypes.string,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
