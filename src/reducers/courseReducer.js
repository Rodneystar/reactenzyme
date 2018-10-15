export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE' :
      var newState = [...state, action.course ]
          return newState
    case 'DEL_COURSES' :
      return [];
    default:
      return state;
  }
}
