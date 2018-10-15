import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './about/AboutPage'
import RunDown from './timer/RunDown'
import CoursesPage from './courses/coursesPage'
import Header from './Header'

class App extends Component {
  constructor() {
    super()
    
  }

  handleSet() {
    return null;
  }

  render() {
    return(
      <div className='appContainer'>
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route path="/rundown" render={function() {
            return <RunDown handleSet={() => null} />
        }}/>

      </div>
    )
  }
}


export default hot(module)(App)
