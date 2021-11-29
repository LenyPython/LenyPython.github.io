import styled from 'styled-components'
import { NavBtn } from '../../styled'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {setAlgoTab, setProjectsTab, setTechTab} from '../../slices/ComponentSlice'
import { getPageContent } from '../../slices/ComponentSlice'

const PROJ = 'PROJECTS'
const TECH = 'TECHS'
const ALGO = 'ALGO & DS'

const Container = styled.div`
  display: flex;
  @media(max-width:600px){
    width: 90%;
    flex-direction: column;
    margin-bottom: 3em;
  }

`

const LeftSide = () => {
  const dispatch = useAppDispatch()
  const { ProjectsTab, TechTab, AlgoTab } = useAppSelector(getPageContent)
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    const value = target.innerText
      dispatch(setProjectsTab('invisible'))
      dispatch(setTechTab('invisible'))
      dispatch(setAlgoTab('invisible'))        
    if(value === PROJ) dispatch(setProjectsTab(''))
    if(value === TECH) dispatch(setTechTab(''))
    if(value === ALGO) dispatch(setAlgoTab(''))        
  }

  return <Container>
    <NavBtn onClick={toggle} className={ProjectsTab} >{PROJ}</NavBtn>
    <NavBtn onClick={toggle} className={TechTab} >{TECH}</NavBtn>
    <NavBtn onClick={toggle} className={AlgoTab} >{ALGO}</NavBtn>
    </Container>
}

export default LeftSide
