import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import {bindActionCreators} from 'redux'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    this.state = {
      course: { title: "" }
    }
  }

  onTitleChange(event) {
    this.setState({course: {title: event.target.value}})
  }

  onClick() {
    this.props.actions.createCourse(this.state.course)
  }

  handleDelete() {
    this.props.actions.delCourses()
  }

  courseRow(course, index) {
    return <div key={index} >{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1> Courses </h1>
        {this.props.courses.map(this.courseRow)}
        <h2> Add Course </h2>
        <input
            type={"text"}
            onChange={this.onTitleChange}
            value={this.state.course.title} />

        <input
            type={"submit"}
            value={"Save"}
            onClick={this.onClick} />

        <input
            type={"submit"}
            value={"Delete All Courses"}
            onClick={this.handleDelete} />
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

