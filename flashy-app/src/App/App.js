import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/App.css';
import HomePage from '../pages/HomePage';

class App extends Component {
  render() {
    return <div className="app">
      <HomePage />
    </div>;
  }
}

export default App;
