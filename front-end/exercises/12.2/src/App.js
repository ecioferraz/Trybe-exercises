import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <h1>Meu Formulário React</h1>
        <Form />
      </main>
    );
  }
}

export default App;
