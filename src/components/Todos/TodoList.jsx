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
      this.addTask(task);
    }
    e.target.reset();
  }
  addTask = (task) => {
    this.props.addTask(task);
  };
  removeTask = (id) => {
    this.props.removeTask(id);
  }

  render() {
    const todos = this.props.todos.todos.map((task, i) =>
      <Todo removeTask={() => this.removeTask(i)} key={task} task={task} />);

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
  addTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

const mapStateToProps = reduxState => ({
  todos: reduxState.todos,
});

const mapDispatchToProps = {
  addTask: addTodo,
  removeTask: removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
