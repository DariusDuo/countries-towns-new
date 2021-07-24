import React, { Component } from 'react';

import './App.css';
import PlaceForm from './components/PlaceForm';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="container">
          <PlaceForm />
        </div>
      </div>
    );
  }
}

export default App;
