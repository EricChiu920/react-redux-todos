import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ task }) => (
  <li>{task}</li>
);

Todo.defaultProps = {
  task: 'All done',
};

Todo.propTypes = {
  task: PropTypes.string,
};

export default Todo;
