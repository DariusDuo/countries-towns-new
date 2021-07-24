import React, { Component } from 'react';
import './App.css';
import PlaceForm from './components/PlaceForm';

class App extends Component {
  state = {};

  createNewPlace = (dataToCreateNewPlace) => {
    console.log('createNewPlace in app.jsx fired');
    console.log('dataToCreateNewPlace', dataToCreateNewPlace);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <PlaceForm onCreateNewPlace={this.createNewPlace} />
        </div>
      </div>
    );
  }
}

export default App;
