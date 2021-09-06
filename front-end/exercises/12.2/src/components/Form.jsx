import React, { Component } from 'react';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    const { state, city } = this.state;
    const brStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

    return (
      <form onSubmit={ this.handleSubmit }>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div>
            <label htmlFor='name' >
              Nome:
              <input
                type='name'
                maxLength='40'
                name='name'
                required
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor='email' >
              Email:
              <input
                type='email'
                maxLength='50'
                name='email'
                required
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor='cpf' >
              CPF:
              <input
                type='text'
                maxLength='11'
                name='cpf'
                required
                onChange={ this.handleChange }
              />
            </label>
          </div>
          
          <div>
            <label htmlFor='address'>
              Endereço:
              <input
                type='text'
                maxLength='200'
                name='address'
                required
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor='city' >
              Cidade:
              <input
                value={ city }
                type='text'
                maxLength='28'
                name='city'
                required
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor='state' >
              Estado:
              <select
                value={ state }
                name='state'
                required
                onChange={ this.handleChange } >
                  <option defaultValue disabled />
                { brStates.map((state, key) => (
                  <option
                    value={ state }
                    key={ key } >
                      { state }
                  </option>
                  ))
                }
              </select>
            </label>
          </div>
          <div>
            <label htmlFor='house' >
              <input
                id='house'
                value='house'
                type='radio'
                name='housing'
                required
                onChange={ this.handleChange }
              />
              Casa
            </label>
            <label htmlFor='apartment'>
              <input
                id='apartment'
                value='apartment'
                type='radio'
                name='housing'
                required
                onChange={ this.handleChange }
              />
              Apartamento
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor='abstract'>Resumo do currículo
              <textarea
                maxLength={ 1000 }
                name='abstract'
                required={ true }
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor='position'>
              Cargo:
              <textarea
                maxLength={ 40 }
                name='position'
                required={ true }
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor='description'>
              Descrição do cargo:
              <input
                type='text'
                maxLength={ 500 }
                name='description'
                required={ true }
                onChange={ this.handleChange }
              />
            </label>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Form;