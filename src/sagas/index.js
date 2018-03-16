import {call, put, takeEvery} from 'redux-saga/effects'
import { REQUEST_POST, fetch } from '../actions'

export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'

function* recievePosts() {
    try {
        const post = yield call(fetch)
        yield put({type: SUCCESS, posts: post.data})
    } catch (error) {
        yield put({type: FAIL, error: error})
    }
}

export default function* watchFetch() {
    yield takeEvery(REQUEST_POST, recievePosts)
}