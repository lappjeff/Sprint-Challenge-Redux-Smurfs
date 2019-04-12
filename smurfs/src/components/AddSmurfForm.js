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

  }

  render () {
    return (
      <FormContainer>
        <form>
          <input placeholder='name'/>
          <input placeholder='age'/>
          <input placeholder='height'/>
          <button type='submit'>Add Smurf</button>
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
