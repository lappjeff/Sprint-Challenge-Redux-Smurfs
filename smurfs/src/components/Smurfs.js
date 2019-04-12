import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Smurf from '../components/Smurf'

export const Smurfs = props => {

  return (
    <SmurfContainer>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />
      })}
    </SmurfContainer>
  )
}

const SmurfContainer = styled.div `
  grid-area: C;
  display: flex;
  margin: 10px;

`
