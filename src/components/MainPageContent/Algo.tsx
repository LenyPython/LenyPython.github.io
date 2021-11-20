import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../app/hooks"
import {getData} from '../../sagas/codeWarsSaga'
import {getCWProfile} from "../../slices/CodeWarsProfile"


const Algo = () => {
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(getData())
  }, [])
  const profile = useAppSelector(getCWProfile)
  const langs = []
  for(let key in profile.languages){
    langs.push(
      <li key={key}>
        {`
        ${key}: \n
        ${profile.languages[key].name}, score: ${profile.languages[key].score}
        `}
      </li>
    )
  }

  return <>
    <h1>Code Wars Profile:</h1>
    <img src="https://www.codewars.com/users/LenyPython/badges/large" alt="badge" />
    <ul>
      <li>Username: {profile.username}</li>
      <li>Completed katas: {profile.totalCompleted}</li>
      <li>Ranking position: {profile.position}</li>
      <li>
      Overall skills: {profile.overall?.name??'Piotr'},
      score {profile.overall?.score??'0'}
      </li>
      <li>
        Languages trained: 
        <ul>
          {langs}
        </ul>
      </li>
    </ul>
    
  </>

}

export default Algo
