import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Header from './Header'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    
  }

  handleSet() {
    return null;
  }

  render() {
    return(
      <div>
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
      </div>
    )
  }
}


export default hot(module)(App)
