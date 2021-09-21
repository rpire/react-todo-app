import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

ReactDOM.render(
  <react.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </react.StrictMode>,
  document.getElementById('root')
  );