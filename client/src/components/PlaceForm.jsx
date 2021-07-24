import React, { Component } from 'react';

class PlaceForm extends Component {
  state = {
    name: 'Brasil',
    continent: 'South America',
    population: '100',
    placeType: 'country',
  };

  handleSubmitLocal = (e) => {
    const { name, continent, population, placeType } = this.state;
    e.preventDefault();
    console.log('Stop!');
    const dataToCreateNewPlace = { name, continent, population, placeType };
    // console.log('dataToCreateNewPlace', dataToCreateNewPlace);
    this.props.onCreateNewPlace(dataToCreateNewPlace);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className="w-50">
        <h2>Create new place</h2>
        <form onSubmit={this.handleSubmitLocal} autoComplete="off">
          <div className="form-group">
            <input
              value={s.name}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name of place"
            />
          </div>
          <div className="form-group">
            <input
              value={s.continent}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="continent"
              placeholder="Continent"
            />
          </div>
          <div className="form-group">
            <input
              value={s.population}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="population"
              placeholder="Population"
            />
          </div>
          <select value={s.placeType} onChange={this.handleInput} name="placeType" className="custom-select">
            <option value="city">City</option>
            <option value="country">Country</option>
          </select>
          <button className="btn btn-primary my-3">Create</button>
        </form>
      </div>
    );
  }
}

export default PlaceForm;
