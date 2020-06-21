import {
  LOGIN, LOGOUT
} from '../constants'

const initialState = {
  login: false,
  logout: true
}

function rootReducer(state = initialState, action) {
  if(action.type === LOGIN) {
    return Object.assign({}, state, {
      login: action.payload.login,
      logout: action.payload.logout
    })
  }

  if(action.type === LOGOUT) {
    return Object.assign({}, state, {
      login: action.payload.login,
      logout: action.payload.logout
    })
  }

  return state
}

export default rootReducer;
