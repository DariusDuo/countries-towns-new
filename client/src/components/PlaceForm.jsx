import React, { Component } from 'react';

class PlaceForm extends Component {
  state = {
    name: '',
    continent: '',
    population: '',
    placeType: '',
  };
  render() {
    return (
      <div className="w-50">
        <h2>Create new place</h2>
        <div className="form-group">
          <input type="text" className="form-control" name="name" placeholder="Name of place" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="continent" placeholder="Continent" />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" name="population" placeholder="Population" />
        </div>
        <select name="placeType" className="custom-select">
          <option value="city">City</option>
          <option value="country">Country</option>
        </select>
        <button className="btn btn-primary my-3">Create</button>
      </div>
    );
  }
}

export default PlaceForm;
