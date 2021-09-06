import React, { Component } from 'react';
import 'bulma/css/bulma.min.css'

class ProfessionalForm extends Component {

  render() {
    const { handleChange } = this.props;
    return (
        <fieldset className='field'>
          <div className='field'>
            <label
            className='label'
            htmlFor='abstract'>
              Resumo do currículo:
              <textarea
                className='textarea'
                maxLength='1000'
                name='abstract'
                required
                onChange={ handleChange }
              />
            </label>
          </div>

          <div className='field'>
            <label
            className='label'
            htmlFor='position'>
              Cargo:
              <textarea
                className='textarea'
                maxLength='40'
                name='position'
                required
                onChange={ handleChange }
              />
            </label>
          </div>

          <div>
            <label
            className='label'
            htmlFor='description'>
              Descrição do cargo:
              <input
                className='input'
                type='text'
                maxLength='500'
                name='description'
                required
                onChange={ handleChange }
                onMouseEnter={ () => alert('Preencha com cuidado esta informação.')
                }
              />
            </label>
          </div>
        </fieldset>
    )
  }
}

export default ProfessionalForm;