import { all, fork } from 'redux-saga/effects'
import codeWarsSaga from './codeWarsSaga'
import leetCodeSaga from './leetCodeSaga'

export default function* rootSaga() {
	yield all([fork(codeWarsSaga),
						fork(leetCodeSaga)])

}

