import React, { Component } from 'react';

class PersonalForm extends Component {
  render() {
    const { handleChange, checkAddress, currState } = this.props;
    const brStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

    return (
      <fieldset className='field'>
        <legend>Dados Pessoais</legend>
        <div className='field'>
          <label
            className='label'
            htmlFor='name' >
            Nome:
            <input
              className='input'
              type='name'
              maxLength='40'
              name='name'
              required
              onChange={ handleChange }
            />
          </label>
        </div>

        <div className='field'>
          <label
            className='label'
            htmlFor='email' >
            Email:
            <input
              className='input'
              type='email'
              maxLength='50'
              name='email'
              required
              onChange={ handleChange }
            />
          </label>
        </div>

        <div className='field'>
          <label
            className='label'
            htmlFor='cpf' >
            CPF:
            <input
              className='input'
              type='text'
              maxLength='11'
              name='cpf'
              required
              onChange={ handleChange }
            />
          </label>
        </div>
        
        <div className='field'>
          <label
          className='label'
          htmlFor='address'>
            Endereço:
            <input
              className='input'
              type='text'
              maxLength='200'
              name='address'
              required
              onChange={ handleChange }
            />
          </label>
        </div>

        <div className='field'>
          <label
          className='label'
          htmlFor='city' >
            Cidade:
            <input
              className='input'
              value={ currState.city }
              type='text'
              maxLength='28'
              name='city'
              required
              onChange={ handleChange }
              onBlur={ checkAddress }
            />
          </label>
        </div>

        <div className='field'>
          <label
          className='label'
          htmlFor='state' >
            Estado:
            <select
              className='select'
              value={ currState.state }
              name='state'
              required
              onChange={ handleChange } >
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

        <div className='field'>
          <label
          className='label'
          htmlFor='house' >
            <input
              id='house'
              value='house'
              type='radio'
              name='housing'
              required
              onChange={ handleChange }
            />
            Casa
          </label>
          <label
          className='label'
          htmlFor='apartment'>
            <input
              id='apartment'
              value='apartment'
              type='radio'
              name='housing'
              required
              onChange={ handleChange }
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalForm;