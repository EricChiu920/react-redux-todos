import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../../components/Todos/TodoList';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
