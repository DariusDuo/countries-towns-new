import React, { Component } from 'react';

class PlaceItem extends Component {
  render() {
    return (
      <div className="card m-2">
        <div className="card-header">Place type: </div>
        <div className="card-body">
          <h5 className="card-title">Place</h5>
          <p className="card-text">Continent:</p>
          <p className="card-text">Population</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default PlaceItem;
