export function createCourse(course) {
  return {type: 'CREATE_COURSE', course: course}
}

export function delCourses() {
  return {type:'DEL_COURSES'}
}

