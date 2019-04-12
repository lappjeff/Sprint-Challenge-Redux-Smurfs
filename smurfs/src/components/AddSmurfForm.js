import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  addSmurf = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      axios.post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }).then(res => this.props.updateData(res.data))
    } else {
      alert('Please fill in all fields')
    }
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <FormContainer>
        <form>
          <input
            placeholder='Name'
            onChange={this.handleChange}
            value={this.state.name}
            name='name'
          />
          <input
            placeholder='Age'
            onChange={this.handleChange}
            value={this.state.age}
            name='age'
          />
          <input
            placeholder='Height'
            onChange={this.handleChange}
            value={this.state.height}
            name='height'
          />
          <button type='submit' onClick={event => this.addSmurf(event)}>Add Smurf</button>
        </form>
      </FormContainer>
    )
  }
}

const FormContainer = styled.div `
  grid-area: AF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;

    input {
      height: 50px;
      border: none;
      border-bottom: 2px solid lightblue;
      text-align: center;
      font-size: 20px;
      width: 60%;
      margin: 0 auto;
    }

    button {
      height: 60px;
      background: lightblue;
      border: none;
      font-size: 20px;

    }
  }
`
export default SmurfForm
