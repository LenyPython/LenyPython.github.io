import styled from 'styled-components'
import ThemeChanger from '../ThemeChanger'
import TopBar from '../TopBar'
import ThreeBackground from './ThreeBackground'
import ProjectCard from '../ProjectCard'
import projData from '../../data/ProjectsData'
import SlideDownContainer from '../SlideDownContainer'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const Portfolio = () => {
  const cards = projData.map( project => {
    return <ProjectCard key={project.title+project.tech.join('')} {...project}/>
  } )

  return <>
    <TopBar />
    <ThemeChanger />
    <CanvasContainer>
    <ThreeBackground />
    </CanvasContainer>
    <SlideDownContainer label='projects' pos={-100} children={cards}/>
    <SlideDownContainer label='techs' pos={50} children='yolo'/>
  </>
}

export default Portfolio
