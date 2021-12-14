import styled from 'styled-components'
import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../app/hooks"
import {getData} from '../../sagas/codeWarsSaga'
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
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 2.5em;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media(max-width: 600px){
    flex-direction: column;
    align-items:center;
    & > div, ul {
      text-align:center;
      margin: .5em;
      align-items:center;
  }
  }

`
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
    <Container>
    <div>
    <h2>CodeWars Profile:</h2>
      <a href="https://www.codewars.com/users/LenyPython/" target="_blank" rel="noreferrer">
      <CW />
      </a>
      <a href="https://www.codewars.com/users/LenyPython/" target="_blank" rel="noreferrer">
      visit profile
      </a>
    </div>
    <ul>
      <li>Username: <br />{profile.username}</li>
      <li>Completed katas:<br /> {profile.totalCompleted}</li>
      <li>Ranking position:<br /> {profile.position}</li>
      <li>
        Overall skills:<br /> {profile.overall?.name??'Piotr'},
        score<br /> {profile.overall?.score??'0'}
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
      <a href="https://leetcode.com/LenyPython/" target="_blank" rel="noreferrer">
      <LC />
      </a>
      <a href="https://leetcode.com/LenyPython/" target="_blank" rel="noreferrer">
        visit profile
      </a>
    </div>
    <div>
      Progress: <br />
      160 problems <br />
      96 easy<br />
      61 medium <br />
      3 Hard <br/>
    </div>
    <div className="flex-col">
    <img src="https://assets.leetcode.com/static_assets/others/algorithm_I.png" 
      width="75px" height="75px"
        alt="Algorithm I" /><br />
      <b>Algorithm I</b><br />
      <span>2021-10-24</span>
    </div>
    <div className="flex-col">
    <img src="https://assets.leetcode.com/static_assets/others/DS_I.png" 
      width="75px" height="75px"
        alt="Algorithm I" /><br />
      <b>Data Structure I</b><br />
      <span>2021-12-14</span>
    </div>
  </Container>
  <Container>
    <div>
    <h2>Frontend Mentor Profile:</h2>
      <a href="https://www.frontendmentor.io/profile/LenyPython" target="_blank" rel="noreferrer">
      <FEM />
      </a>
      <a href="https://www.frontendmentor.io/profile/LenyPython" target="_blank" rel="noreferrer">
        visit profile
      </a>
    </div>
    <div>
      Score: 190pts 
    </div>
  </Container>
  </>


}

export default Algo
