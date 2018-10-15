import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import {Route} from 'react-router-dom'
import AboutPage from './about/AboutPage'
import Header from './common/Header'
import HomePage from './home/Homepage'
import CoursesPage from './course/CoursesPage'
import ManageCoursePage from './course/ManageCoursePage'

class App extends Component {
  render() {
    return(
      <div className={"container-fluid"}>
        <Header />
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/courses"} component={CoursesPage}/>
        <Route path={"/course/:id"} component={ManageCoursePage}/>
        <Route path={"/about"} component={AboutPage}/>
      </div>
    )
  }
}

export default hot(module)(App)
