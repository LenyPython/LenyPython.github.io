import { all, fork } from 'redux-saga/effects'
import codeWarsSaga from './codeWarsSaga'

export default function* rootSaga() {
	yield all([fork(codeWarsSaga)])

}

