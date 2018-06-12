import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { addTodo, removeTodo } from '../../redux/actions/todoActions';


class TodoList extends Component {
  state = {
    task: '',
  }

  onEnterSubmit = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      this.submitTask(e);
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitTask = (e) => {
    e.preventDefault();
    const { task } = this.state;
    if (!this.props.todos.todos.includes(task)) {
      this.addTodo(task);
    }
    e.target.reset();
  }
  addTodo = (task) => {
    this.props.addTodo(task);
  };
  removeTodo = (id) => {
    this.props.removeTodo(id);
  }

  render() {
    const todos = this.props.todos.todos.map((task, i) =>
      <Todo removeTodo={() => this.removeTodo(i)} key={task} task={task} />);

    return (
      <React.Fragment>
        <form onSubmit={this.submitTask} >
          <label htmlFor="task">
            Task <input onChange={this.handleChange} type="text" name="task" id="task" />
          </label>
          <button onKeyPress={this.onEnterSubmit} type="submit">Submit</button>
        </form>
        <ul>
          {todos}
        </ul>
      </React.Fragment>
    );
  }
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.array),
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = reduxState => ({
  todos: reduxState.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
