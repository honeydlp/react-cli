import * as actionTypes from '../constants/index'

export function updatePermission(data) {
    return {
        type: actionTypes.Permission_UPDATE,
        data
    }
}

export function getPermission(update) {
  return function (dispatch) {
    return fetch('')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(updatePermission(update, json))
      )
  }
}