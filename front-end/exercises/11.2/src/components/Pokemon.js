import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const {pokemon: {name, type, averageWeight, image}} = this.props;
    return (
      <div className='pokemon'>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;