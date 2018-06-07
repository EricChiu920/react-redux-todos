import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TodoList from '../../components/Todos/TodoList';
import store from '../../configureStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const todos = ['eat'];
  ReactDOM.render(
    <Provider store={store}>
      <TodoList todos={todos}/>
    </Provider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
