import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    return(
      <form>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link
          to="/registeredclients"
          onClick={ () => login({ email, password }) }
        >
          <button type="button">
            Login
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(login(event)),
});

export default connect(null, mapDispatchToProps)(Login);
