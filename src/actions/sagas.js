import { delay } from 'redux-saga'
import { put, call, all, select, takeEvery, take } from 'redux-saga/effects'
import * as userService from '../services/userService'

export function* helloSaga() {
    console.log('Hello Sagas!');
    yield delay(1000)
    const products = yield call(userService.getSceneInfo)
    yield put({ type: 'HelloSaga', products })
}

function* watchAndLog() {
    while (true) {
        const action = yield take('HelloSaga22')
        const state = yield select()

        console.log('action', action)
        console.log('state after', state)
    }
}

export function* rootSaga() {
    yield all([
        helloSaga(),
        watchAndLog()
    ])
}