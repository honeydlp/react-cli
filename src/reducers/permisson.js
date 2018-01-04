import * as actionTypes from '../constants/userinfo'

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.Permission_UPDATE:
            return action.data
        default:
            return state
    }
}