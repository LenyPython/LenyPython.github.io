import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
import projData from '../../data/ProjectsData'
import { MainContainer  } from '../../styled'
import { ReactComponent as CloseBtn } from '../../svg/close.svg'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {
  getPageContent,
  setAlgoTab,
  setProjectsTab,
  setTechTab
} from '../../slices/ComponentSlice'

const Container = styled.div`
  width: 95%;
  height: 95%;
  margin: 50px auto 1em;
  overflow-y: auto;

`

const MainPageContent = () => {
  const dispatch = useAppDispatch()
  const { ProjectsTab, TechTab, AlgoTab } = useAppSelector(getPageContent)
  const sx = {
        position: 'absolute' as 'absolute',
        top: '0',
        right: '-50px',
        width: '24px',
        height: '24px',
        color:'var(--main-font-color)',
        cursor: 'pointer',
        zIndex: 10
        }
  const cards = projData.map( project => {
    return <ProjectCard key={project.title+project.tech.join('')} {...project}/>
  } )
  return <>
    <MainContainer className={ProjectsTab}>
      <Container>
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
      </Container>
      <CloseBtn onClick={()=>dispatch(setProjectsTab('invisible'))} style={sx} />
  </MainContainer>
    <MainContainer className={TechTab}>
      <Container>
      Tech
      </Container>
      <CloseBtn onClick={()=>dispatch(setTechTab('invisible'))} style={{...sx, top:'25px'}} />
  </MainContainer>
    <MainContainer className={AlgoTab}>
      <Container>
      ALGO
      </Container>
      <CloseBtn onClick={()=>dispatch(setAlgoTab('invisible'))} style={{...sx, top:'50px'}} />
  </MainContainer>
  </>
}

export default MainPageContent
