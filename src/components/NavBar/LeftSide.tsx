import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
import projData from '../../data/ProjectsData'
import { NavBtn } from '../../styled'
import {ReactComponent as LinkedIn} from '../../svg/github.svg';
import {ReactComponent as GitHub} from '../../svg/linedin.svg';

const Container= styled.div`
  position: fixed;
  top: 6%;
  left: 50%;
  width: 70%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;

`


const LeftSide = () => {
  const cards = projData.map( project => {
    return <ProjectCard key={project.title+project.tech.join('')} {...project}/>
  } )
  return <Container>
    <div>
    <NavBtn>projects</NavBtn>
    <NavBtn>tech</NavBtn>
    <NavBtn>algo & ds</NavBtn>
    </div>
    <div>
    <LinkedIn height='100%'/>
    <GitHub height='100%' />
    </div>
  </Container> 
}

export default LeftSide
