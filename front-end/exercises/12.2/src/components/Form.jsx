import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label htmlFor='name' >Nome:
            <input
              type='text'
              maxLength={ 40 }
              name='name'
              required={ true }
            />
          </label>
          <label htmlFor='email' >Email:
            <input
              type='email'
              maxLength={ 50 }
              name='email'
              required={ true }
            />
          </label>
          <label htmlFor='cpf' >CPF:
            <input
              type='number'
              maxLength={ 11 }
              name='cpf'
              required={ true }
            />
          </label>
          <label htmlFor='address'>Endereço:
            <input
              type='text'
              maxLength={ 200 }
              name='address'
              required={ true }
            />
          </label>
          <label htmlFor='city' >Cidade:
            <input
              type='text'
              maxLength={ 28 }
              name='city'
              required={ true }
            />
          </label>
          <label htmlFor='state' >Estado:
            <select
              name='state'
              required={ true } >
              <option>map br states</option>
            </select>
          </label>
          <label htmlFor='housing' >Casa / Apartamento
            <input
              type='radio'
              name='housing'
              required={ true }
            />
            <input
              type='radio'
              name='housing'
              required={ true }
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor='abstract'>Resumo do currículo
            <textarea
              maxLength={ 1000 }
              name='abstract'
              required={ true }
            />
          </label>
          <label htmlFor='position'>Cargo:
            <textarea
              maxLength={ 40 }
              name='position'
              required={ true }
            />
          </label>
          <label htmlFor='description'>Descrição do cargo:
            <input
              type='text'
              maxLength={ 500 }
              name='description'
            />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form;