import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      housing: '',
      abstract: '',
      position: '',
      description: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkAddress = this.checkAddress.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = value.replace(/[^\w\s]/gi, '');
  // ref https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp?rq=1
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
  }

  checkAddress({ target }) {
    let { name, value } = target;
    if (value.match(/^\d/)) {
      this.setState({
        [name]: '',
      });
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className='section'>
          <PersonalForm
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            checkAddress={ this.checkAddress }
            currState={ this.state }
          />
          <ProfessionalForm
          handleChange={ this.handleChange }
          />
          <button
            className='button is-success is-hovered'
            type='submit' >
            Enviar
          </button>
          <button
            className='button is-danger is-hovered'
            type='button' >
            Limpar
          </button>
        </div>
      </form>
    )
  }
}

export default Form;