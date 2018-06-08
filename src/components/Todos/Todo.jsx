import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ task, removeTask }) => (
  <li>{task}<button onClick={removeTask}>X</button></li>
);

Todo.defaultProps = {
  task: 'All done',
};

Todo.propTypes = {
  task: PropTypes.string,
  removeTask: PropTypes.func.isRequired,
};

export default Todo;
