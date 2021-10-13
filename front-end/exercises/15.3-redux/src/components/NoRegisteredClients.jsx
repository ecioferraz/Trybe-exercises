import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NotLogged from './NotLogged';

class NoRegisteredClients extends Component {
  render() {
    const { userLogin } = this.props;
    if (!userLogin.email) return <NotLogged />
    return (
    <div>
      <h3>Nenhum cliente cadastrado</h3>
      <Link to="/register">
        <button type="button">
          Cadastrar usuário
        </button>
      </Link>
    </div>
    )
  };
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});

export default connect(mapStateToProps)(NoRegisteredClients);
