import axios from 'axios'
import { takeLeading, call, put, Effect } from 'redux-saga/effects'
import { saveCWData } from '../slices/CodeWarsProfile'
import {CWProfileInterface} from '../types/Interfaces'

enum CWactions {
	GET_DATA = 'GET_DATA',
}

export const getData = () => {
	return { type: CWactions.GET_DATA }
}

export default function* codeWarsSaga() {
	yield takeLeading(CWactions.GET_DATA, getDataWorker)
}

function* getDataWorker():Generator<Effect,void,CWProfileInterface>{
	try{
	let data: CWProfileInterface = yield call(getProfile)
	yield put(saveCWData(data))
	}
	catch(e){
	  if(e instanceof Error) console.log(e.message)
	}
}
const getProfile = async () => {
	const URL = 'https://www.codewars.com/api/v1/users/LenyPython'
	let response = await axios.get(URL)
	const { username, name, leaderboardPosition:position, ranks,
	codeChallenges:{totalCompleted}} = await response.data
	const { overall, languages } = await ranks
	return {
		username,
		name,
		position,
		totalCompleted,
		overall,
		languages
	}

}
