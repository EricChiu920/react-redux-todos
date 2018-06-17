import React from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import RoutePaths from './routePaths/RoutePaths';

const App = () => (
  <React.StrictMode>
    <div className="App">
      <h1 className="todo-title" >See our Todos!</h1>
      {/* <p><Link to="/todos/new" href="/todos/new" >Add some todos!</Link></p> */}
      <RoutePaths />
    </div>
  </React.StrictMode>
);

export default App;
