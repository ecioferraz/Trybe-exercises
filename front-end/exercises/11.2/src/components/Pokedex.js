import React, { Component } from 'react';
import Pokemon from'./Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokedex'>
        {pokemons.map((pkm) => <Pokemon key={pkm.id} pokemon={pkm} />)}
      </div>
    );
  }
}

export default Pokedex;