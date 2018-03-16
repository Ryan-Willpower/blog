import { combineReducers } from 'redux'
import { SUCCESS, FAIL } from '../sagas'

const initialState = null

export function post(state = initialState, action) {
    switch (action.type) {
        case SUCCESS:
            return Object.assign({}, state, {
                ...action.posts
            })
        case FAIL:
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    post
})

export default rootReducer