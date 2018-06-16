import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, task, removeTodo }) => (
  <li key={id}>{task}<button onClick={removeTodo}> X</button></li>
);

Todo.defaultProps = {
};

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Todo;
