import React, { Component } from 'react';
import './App.css';
import PlaceForm from './components/PlaceForm';
import axios from 'axios';

class App extends Component {
  state = {};

  createNewPlace = async (dataToCreateNewPlace) => {
    console.log('createNewPlace in app.jsx fired');
    console.log('dataToCreateNewPlace', dataToCreateNewPlace);

    try {
      const createResult = await axios.post('http://localhost:5000/api/place/new', dataToCreateNewPlace);
      console.log('createResult', createResult);
    } catch (error) {
      console.log(error);
    }
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
