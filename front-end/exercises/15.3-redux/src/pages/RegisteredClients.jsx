import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NoRegisteredClients from '../components/NoRegisteredClients';
import NotLogged from '../components/NotLogged';

class RegisteredClients extends Component {
  render() {
    const { clients, userLogin } = this.props;
    console.log(this.props);
    if (!userLogin.email) return <NotLogged />
    if (clients.length < 1) return <NoRegisteredClients />
    return (
      <div>
        <Link to="/register">
          Cadastrar novo cliente
        </Link>
        <div>
          {clients.map((client, index) => {
            return (
              <div key={index}>
                <p>Nome: { client.name }</p>
                <p>Idade: { client.age }</p>
                <p>Email: { client.email }</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.registerReducer,
  userLogin: state.loginReducer,
});

export default connect(mapStateToProps)(RegisteredClients);
