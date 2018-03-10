import {SUCCESS, FAIL} from '../actions/fetch'

const initialState = {
    posts: null,
    error: null
}

export function fetch(state = initialState, action) {
    switch (action.type) {
        case SUCCESS:
            return Object.assign({}, state, {
                posts: action.payload
            })
            break
        case FAIL:
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return {...state, error: 'nothing sent'}
    }
}
