

import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions'
import './App.css';


const App = props => {

  useEffect(() => props.getData(), [])
  return (
    <div className="App">

    </div>
  );
}

const mapStateToProps = ({ getDataReducer }) => {
  return {
    friends: getDataReducer.friends,
    isFetching: getDataReducer.isFetching
  }
}

export default connect(mapStateToProps, { getData })(App);
