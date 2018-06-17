import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

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
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.submitTask} >
        <Input onChange={this.handleChange} name="task" placeholder="Todo" focus />
        <Button onKeyPress={this.onEnterSubmit} primary >Submit</Button>
      </form>
    );
  }
}

NewTodoForm.defaultProps = {
};

NewTodoForm.propTypes = {
  submitTask: PropTypes.func.isRequired,
};

export default NewTodoForm;
