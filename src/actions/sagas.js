import { delay } from 'redux-saga'
import { put, call, all, select, takeEvery, take, cancel } from 'redux-saga/effects'
import * as userService from '../services/userService'

export function* helloSaga() {
    console.log('Hello Sagas!');
    yield delay(2000)
    const products = yield call(userService.getSceneInfo)
    yield put({ type: 'HelloSaga', products })
}

function* watchAndLog() {
    while (process.env.NODE_ENV === 'development') {
        const action = yield take('HelloSaga')
        const state = yield select()

        console.log('action', action)
        console.log('next state', state)
    }
}

function* watchHelloSaga() {
    while (true) {
        const action = yield take('click');
        yield helloSaga();
    }
}

export function* rootSaga() {
    yield all([
        watchHelloSaga(),
        watchAndLog()
    ])
}