import { takeEvery, call, put, all } from 'redux-saga/effects'
import axios from 'axios'

export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'
export const REQUEST_POST = 'REQUEST_POST'

function fetch() {
    return axios.get('https://www.willpower.in.th/posts')
}

function* recievePosts() {
    try {
        const post = yield call(fetch)
        yield put({type: SUCCESS, payload: post.data[0]})
    } catch (error) {
        yield put({type: FAIL, error: error})
    }

}

function* test() {
    const test = yield call(fetch)
    console.log(test.data[0])
}

function* watchFetch() {
    yield takeEvery(REQUEST_POST, recievePosts)
}

export default function* rootSaga() {
    yield all([
        watchFetch(),
        test()
    ])
}
