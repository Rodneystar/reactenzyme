import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { hot } from 'react-hot-loader'
import RunDown from './RunDown'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

debugger;
library.add(faAngleUp, faAngleDown)

class App extends Component {
  constructor() {
    super()
    this.hostUrl = "http://localhost:8080/"
    this.state = { jsonTable: {} };

    this.getInitialState();
  }

  getInitialState() {
    axios.get('/api')
      .then((response) => {
        this.setState({jsonTable: response.data})
      })
      .catch((err) => {
          console.log(err)
      })
  }

  handleSet() {
    return null;
  }

  render() {
    return(
      <div>
          <RunDown handleSet={this.handleSet}/>
      </div>
    )
  }
}


export default hot(module)(App)
