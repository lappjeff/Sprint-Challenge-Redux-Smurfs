import React from 'react'
import styled from 'styled-components'

const Smurf = ({ smurf, ...rest}) => {
  return (
    <SmurfItem>
      <h2>{smurf.name}</h2>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </SmurfItem>
  )
}

const SmurfItem = styled.div `
  background: lightblue;
  width: 200px;
  height: 100px;
  padding: 10px;
  text-align: center;


  }
`

export default Smurf
