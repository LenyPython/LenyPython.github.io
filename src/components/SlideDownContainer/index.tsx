import { useState } from 'react'
import styled from 'styled-components'


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
  &.invisible {
    transform: translate(-50%, -125%);
  }
`


const Projects: React.FC = ({ children }) => {
  const [isActive, setActive] = useState(false)
  const handleClose = () => setActive(false)
  const handleOpen = () => setActive(true)

  return <Container className={isActive?'':'invisible'}>
    {children}
  </Container>
}

export default Projects
