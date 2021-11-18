import { useState } from 'react'
import { ReactComponent as CloseBtn } from '../../imgs/close.svg'
import projData from '../../data/ProjectsData'
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'


const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1%;
  height: 84%;
  width: 50%;
  padding: 1em;
  background: var(--main-containers-color);
  border-radius: 15px;
  transition: all .4s;
  transform: translateX(-50%);
  z-index: 100;
  box-shadow: var(--main-shadow);
  & > * {
    margin: .5em;
  }
  &.invisible {
    transform: translate(-50%, -125%);
  }
  & > .openBtn {
    cursor: pointer;
    background: var(--main-containers-color);
    position: absolute;
    bottom: -20%;
    color: var(--main-font-color);
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: .3em;
    padding: .3em .6em;
    box-shadow: var(--main-shadow);
    &:hover {
      transition: all .5s;
      background: var(--main-font-color);
      color: var(--main-background-color);
      box-shadow: none;
    }
  }
`

interface Props {
  label: string
  pos?: number | string
}

const Projects: React.FC<Props> = ({ children, label, pos }) => {
  const [isActive, setActive] = useState(false)
  const handleClose = () => setActive(false)
  const handleOpen = () => setActive(true)

  if(typeof pos === 'number') pos = `${pos}px`

  return <Container className={isActive?'':'invisible'}>
      <CloseBtn 
        onClick={handleClose}
        style={{
        position: 'absolute',
        top: '-80px',
        left: pos,
        width: '24px',
        height: '24px',
        color:'var(--main-font-color)',
        cursor: 'pointer',
        zIndex: 10
        }}
      />
    {children}
    <div className="openBtn"
    onClick={handleOpen}
      style={{left:pos}}>{label}</div>
  </Container>
}

export default Projects
