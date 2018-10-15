import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import {bindActionCreators} from 'redux'
import CourseList from './CourseList'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.deleteCourse = this.deleteCourse.bind(this)
  }

  courseRow(course, index) {
    return <div key={index} >{course.title}</div>
  }

  deleteCourse() {
    return null
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1> Courses </h1>
          <CourseList courses={courses} deleteCourse={this.deleteCourse} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)

