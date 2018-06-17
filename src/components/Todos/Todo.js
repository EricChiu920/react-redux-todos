import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const liStyle = {
  width: '100%',
  // justifyContent: 'space-between',
  // alignItems: 'flex-start',
};

const buttonStyle = {
};

const Todo = ({ id, task, removeTodo }) => (
  <li key={id} style={liStyle} >
    {task}
    <Button style={buttonStyle} onClick={removeTodo} color="red" basic compact >Remove</Button>
  </li>
);

Todo.defaultProps = {
};

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Todo;
