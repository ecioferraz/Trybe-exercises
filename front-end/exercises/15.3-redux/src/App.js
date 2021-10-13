import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredClients from './pages/RegisteredClients';
import './App.css';
import Register from './pages/Register';


function App() {
  return (
    <Provider store={ store } >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/registeredclients" component={ RegisteredClients } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
