/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Todo from './Todo';
import { addTodo, removeTodo, getTodos } from '../../redux/actions/todoActions';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  handleAdd = (val) => {
    this.props.addTodo(val);
  };

  render() {
    const todos = this.props.todos.todos.map(task => (
      <Todo
        removeTodo={() => this.props.removeTodo(task._id)}
        id={task._id}
        key={task._id}
        task={task.task}
      />
    ));

    return (
      <React.Fragment>
        <Route path="/todos/new" component={props => <NewTodoForm {...props} submitTask={this.handleAdd} />} />
        <Route exact path="/todos" component={() => <React.Fragment><ul>{todos}</ul></React.Fragment>} />
      </React.Fragment>
    );
  }
}

TodoList.defaultProps = {
  todos: [],
  history: [],
};

TodoList.propTypes = {
  todos: PropTypes.shape({
    todos: PropTypes.array,
  }),
  getTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    length: PropTypes.number,
  }),
};

const mapStateToProps = reduxState => ({
  todos: reduxState.todos,
});

export default withRouter(connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList));
