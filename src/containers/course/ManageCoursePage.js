import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions'
import * as authorActions from '../../actions/authorActions'
import CourseForm from './CourseForm'

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.updateCourseState = this.updateCourseState.bind(this)
        this.saveCourse = this.saveCourse.bind(this)
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course})
    }

    saveCourse(event) {
        event.preventDefault()
        this.props.actions.saveCourse(this.state.course)
    }

    render() {
        return (
            <div>
                <h1> Manage Course </h1>
                <CourseForm 
                    onSave={this.saveCourse}
                    onChange={this.updateCourseState}
                    allAuthors={this.props.authors}
                    course={this.state.course} 
                    errors={this.state.errors} />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let course = { id: 'loading...', watchHref: '', title: '', authorId: '', length: '', category: '' }
    const authorsFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })
    return {
        course: course,
        authors: authorsFormattedForDropDown
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...courseActions, ...authorActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
