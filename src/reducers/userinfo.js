import * as actionTypes from '../constants/index'

import initialState from '../constants/initialState.js'

export default function userinfo (state = initialState.userInfo, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}