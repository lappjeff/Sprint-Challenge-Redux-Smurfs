

import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions'
import { Smurfs } from './Smurfs'
import AddSmurfForm  from './AddSmurfForm'

import './App.css';

// Couldn't seem to get it working with Hooks... Ask about it in review
// const App = props => {
//
//   const [smurfs, updateSmurfs] = useState(undefined)
//
//   const checkSmurfs = () => console.log(props)
//
//   const getSmurfs = () => {
//     props.getData()
//     checkSmurfs()
//   }
//
//   useEffect(() => getSmurfs(), [])
//   return (
//     <div className="App">
//       <Smurfs smurfs={props.smurfs} />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurfs: []
    }
  }


  componentDidMount() {
    this.props.getData().then(() =>  this.setState({smurfs: this.props.smurfs}))

  }

  updateData = data => {
    this.setState({ smurfs: data})
  }

  render() {
    return (
      <div className="App">
        <Smurfs smurfs={this.state.smurfs} />
        <AddSmurfForm updateData={this.updateData}/>
      </div>
    );
  }

}

const mapStateToProps = ({ smurfs, isFetching}) => {

  return {
    smurfs,
    isFetching
  }

}

export default connect(mapStateToProps, { getData })(App);
