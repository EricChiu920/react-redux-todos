import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { addTodo } from '../../redux/actions/todoActions';


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
    this.addTask(this.state.task);
    e.target.reset();
  }
  addTask = (task) => {
    this.props.addTask(task);
  };

  render() {
    const todos = this.props.todos.todos.map((task, i) =>
      <Todo key={i} task={task} />);

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
};

const mapStateToProps = reduxState => ({
  todos: reduxState.todos,
});

const mapDispatchToProps = {
  addTask: addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
