import React from 'react'

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

   this.state = {
     estiloPreferido: '',
     idade: 0,
     foiEmShow: false,
     experiencia: ''
   } 
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; 
    this.setState({
      [name]: value,
    });
  }

  render () {
    return (
      <form>
        <label>
          Qual seu estilo de musica preferido?
          <select name='estiloPreferido' value={this.state.estiloPreferido} onChange={this.handleChange}>
            <option>Samba</option>
            <option>Pagode</option>
            <option>Forró</option>
          </select>
        </label>
        <label>
          Qual sua idade?
          <input type='number' value={this.state.idade} name='idade' onChange={this.handleChange}/>
        </label>
        <label>
          Ja foi em algum Show ao-vivo?
          <input type='checkbox' value={this.state.checkbox}  name='foiEmShow' onChange={this.handleChange}/>
        </label>
        <label>
          Como foi sua Experíencia?
          <textarea name='experiencia' value={this.state.experiencia} onChange={this.handleChange}></textarea>
        </label>
      </form>
    );
  }
}

export default Form