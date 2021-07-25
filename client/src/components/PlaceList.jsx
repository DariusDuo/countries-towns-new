import React, { Component } from 'react';
import PlaceItem from './PlaceItem';

class PlaceList extends Component {
  render() {
    return (
      <div>
        <h2>Place list</h2>
        <div className="places-list d-flex flex-wrap">
          {this.props.places.map((place) => (
            <PlaceItem onDelete={this.props.onDelete} place={place} key={place._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default PlaceList;
