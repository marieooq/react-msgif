import { combineReducers } from 'redux'

const isRec = (state = false, action) => {
  switch (action.type) {
    case 'START_REC':
      return true
    case 'END_REC':
      return false
    default:
      return state
  }
}

export default combineReducers({
  isRec
})