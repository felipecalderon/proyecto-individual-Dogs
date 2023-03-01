import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../App';
import Home from "./Home";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, Home);
});