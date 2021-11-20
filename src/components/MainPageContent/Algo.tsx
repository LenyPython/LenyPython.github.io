import styled from 'styled-components'
import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../app/hooks"
import {getData} from '../../sagas/codeWarsSaga'
import {getLCData} from "../../sagas/leetCodeSaga"
import {getCWProfile} from "../../slices/CodeWarsProfile"
import { ReactComponent as CW } from '../../svg/codewars.svg'
import { ReactComponent as LC } from '../../svg/leetcode.svg'
import { ReactComponent as FEM } from '../../svg/frontend.svg'


const Container = styled.div`
  background: var(--main-background-color);
  border: 2px solid var(--main-font-color);
  padding: 1.5em;
  border-radius: 15px;
  display: flex;
  margin-bottom: 2em;
  ul {
    list-style: none;
  }
  & > div, ul {
    margin-right: 2.5em;
  }
`
const Algo = () => {
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(getData())
    dispatch(getLCData())
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
    <Container>
    <div>
    <h2>Code Wars Profile:</h2>
      <a href="https://www.codewars.com/users/LenyPython/" target="_blank" rel="noreferrence">
      <CW />
      visit profile
      </a>
    </div>
    <ul>
      <li>Username: {profile.username}</li>
      <li>Completed katas: {profile.totalCompleted}</li>
      <li>Ranking position: {profile.position}</li>
      <li>
      Overall skills: {profile.overall?.name??'Piotr'},
      score {profile.overall?.score??'0'}
      </li>
    </ul>
    <div>
      Languages trained: 
      <ul>
        {langs}
      </ul>
    </div>
  </Container>
  <Container>
    <div>
    <h2>LeetCode Profile:</h2>
      <a href="https://leetcode.com/LenyPython/" target="_blank" rel="noreferrence">
      <LC />
        visit profile
      </a>
    </div>
    <div>
      Progress: <br />
      143 problems <br />
      90 easy<br />
      51 medium <br />
      2 Hard <br/>
    </div>
  </Container>
  <Container>
    <div>
    <h2>Frontend Mentor Profile:</h2>
      <a href="https://www.frontendmentor.io/profile/LenyPython" target="_blank" rel="noreferrence">
      <FEM />
        visit profile
      </a>
    </div>
    <div>
      Score: 150pts 
    </div>
  </Container>
  </>


}

export default Algo
