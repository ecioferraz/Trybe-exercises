import React, { Component } from 'react';
import './App.css';
import pokemons from './components/data';
import Pokedex from './components/Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokédex</h1>
      <Pokedex pokemons={pokemons} />
    </div>
    );
  }
}

export default App;
