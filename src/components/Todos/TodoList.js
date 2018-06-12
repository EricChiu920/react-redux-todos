import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Todo from './Todo';
import { addTodo, removeTodo } from '../../redux/actions/todoActions';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  handleAdd = (val) => {
    this.props.addTodo(val);
  };

  render() {
    const todos = this.props.todos.todos.map(task =>
      <Todo removeTodo={() => this.props.removeTodo(task)} key={task} task={task} />);

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
  todos: PropTypes.objectOf(PropTypes.array),
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = reduxState => ({
  todos: reduxState.todos,
});

export default withRouter(connect(mapStateToProps, { addTodo, removeTodo })(TodoList));
