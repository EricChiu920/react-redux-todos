/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Loader } from 'semantic-ui-react';
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

  renderLoader = () => (
    <Loader active inline="centered" >Loading</Loader>
  );

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
        <NewTodoForm submitTask={this.handleAdd} />
        {this.props.loaded ? <ul>{todos}</ul> : this.renderLoader()}
        {/* <ul>{todos}</ul> */}
      </React.Fragment>
    );
  }
}

TodoList.defaultProps = {
  todos: null,
  loaded: false,
};

TodoList.propTypes = {
  todos: PropTypes.shape({
    todos: PropTypes.array,
  }),
  getTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  loaded: PropTypes.bool,
};

const mapStateToProps = reduxState => ({
  loaded: reduxState.todos.loaded,
  todos: reduxState.todos,
});

export default withRouter(connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList));
