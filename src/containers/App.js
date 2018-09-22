import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { hot } from 'react-hot-loader'
import SubComp from './SubComp'

class App extends Component {
  constructor() {
    super()
    this.hostUrl = "http://localhost:8080/"
    this.state = { jsonTable: {} };

    axios.get('/api')
      .then((response) => {
        // console.log('in axio ' + JSON.stringify(response))
        this.setState({jsonTable: response.data})
      })
      .catch((err) => {
          console.log(err)
      })
    // this.getProps();
  }


  render() {
    return(
      <div>
          { `${JSON.stringify(this.state.jsonTable)} we're here` }
          <SubComp />
      </div>
    )
  }
}


export default hot(module)(App)
