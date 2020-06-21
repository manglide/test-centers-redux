import { LOGIN, LOGOUT } from '../constants'

export function setlogin(payload) {
  return {
    type: LOGIN,
    payload: payload
  }
}

export function setlogout(payload) {
  return {
    type: LOGOUT,
    payload: payload
  }
}
