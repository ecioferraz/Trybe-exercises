import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDo = ['breakfast', 'gym', 'revise', 'study', 'make more coffee', 'class', 'exercises', 'watch something', 'sleep']

class App extends Component {
  render() {
    return (
      <ul>{ toDo.map((dos) => Task(dos)) }</ul>
    );
  }
}

export default App;
