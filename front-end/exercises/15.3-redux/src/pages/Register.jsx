import React, { Component } from "react";
import NotLogged from "../components/NotLogged";
import { addClient } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { name, age, email } = this.state;
    this.props.addClient({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <NotLogged />
    return(
      <form>
        <label htmlFor="name">Nome:
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="age">Idade:
          <input
            type="text"
            name="age"
            id="age"
            value= { age }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">Email:
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/registeredclients" onClick={ this.handleClick }>
          <button type="button">
            Cadastrar
          </button>
        </Link>
      </form>
    );
  }
};

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addClient: (event) => dispatch(addClient(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
