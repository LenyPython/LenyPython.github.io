import { takeLeading, call, put, Effect } from 'redux-saga/effects'
import {CWProfileInterface} from '../types/Interfaces'
import axios from 'axios'

enum LCactions {
	GET_DATA = 'GET_DATA',
}

export const getLCData = () => {
	return { type: LCactions.GET_DATA }
}

export default function* leetCodeSaga() {
	yield takeLeading(LCactions.GET_DATA, getDataWorker)
}

function* getDataWorker():Generator<Effect,void,CWProfileInterface>{
	try{
	let data = yield call(scrapeCompleted)
	//yield put(saveLCData(data))
	}
	catch(e){
		console.log(e)
	}
}

const scrapeCompleted = async () => {
	const URL = 'https://leetcode.com/LenyPython/'
}
