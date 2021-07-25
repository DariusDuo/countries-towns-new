import React, { Component } from 'react';
import './App.css';
import PlaceForm from './components/PlaceForm';
import axios from 'axios';
import PlaceList from './components/PlaceList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [1, 2, 3, 4, 5],
    };
  }

  componentDidMount() {
    this.getAllPlaces();
  }

  createNewPlace = async (dataToCreateNewPlace) => {
    console.log('createNewPlace in app.jsx fired');
    console.log('dataToCreateNewPlace', dataToCreateNewPlace);

    try {
      const createResult = await axios.post('http://localhost:4000/api/place/new', dataToCreateNewPlace);
      console.log('createResult', createResult.data);
      return createResult.data ? true : false;
    } catch (error) {
      console.log(error);
    }
  };

  getAllPlaces = async () => {
    // gaunam visas vietas is db
    try {
      const allPlacesFromDb = await axios.get('http://localhost:4000/api/place');
      //jei gavom duomenis
      if (allPlacesFromDb.data) {
        //nustatom state i tai, ka gavom
        this.setState({ places: allPlacesFromDb.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <PlaceForm onCreateNewPlace={this.createNewPlace} />
          {/* perduodam places i PlaceList */}
          <PlaceList places={this.state.places} />
        </div>
      </div>
    );
  }
}

export default App;
