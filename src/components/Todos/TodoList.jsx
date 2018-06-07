import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { addTodo } from '../../redux/actions/todoActions';


class TodoList extends Component {
  state = {
    task: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitTask = (e) => {
    e.preventDefault();
    console.log('submit');
    this.addTask(this.state.task);
    e.target.reset();
  }
  addTask = (task) => {
    this.props.addTask(task);
  };

  render() {
    let todos = this.props.todos.map((task, i) =>
      <Todo key={i} task={task} />);

    return (
      <React.Fragment>
        <form onSubmit={this.submitTask}>
          <label htmlFor="task">
          </label>
          Task <input onChange={this.handleChange} type="text" name="task" id="task" />
          <button type="submit">Submit</button>
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
  todos: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = reduxState => ({
  todos: reduxState.todos,
});

const mapDispatchToProps = {
  addTask: addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
