import React, { Component } from 'react';
import PlaceItem from './PlaceItem';

class PlaceList extends Component {
  render() {
    return (
      <div>
        <h2>Place list</h2>
        {this.props.places.map((place) => (
          <PlaceItem place={place} key={place} />
        ))}
      </div>
    );
  }
}

export default PlaceList;
