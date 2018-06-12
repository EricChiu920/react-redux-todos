import React, { Component } from 'react';

class NewTodoForm extends Component {
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
    this.props.submitTask(task);
    this.props.history.push('/todos');
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.submitTask} >
        <label htmlFor="task">
          Task <input onChange={this.handleChange} type="text" name="task" id="task" />
        </label>
        <button onKeyPress={this.onEnterSubmit} type="submit">Submit</button>
      </form>
    );
  }
}

export default NewTodoForm;
