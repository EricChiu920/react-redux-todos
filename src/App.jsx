import React from 'react';
import './App.css';
import TodoList from './components/Todos/TodoList';

const App = () => (
  <div className="App">
    <h1>See our Todos!</h1>
    <TodoList />
  </div>
);

export default App;
