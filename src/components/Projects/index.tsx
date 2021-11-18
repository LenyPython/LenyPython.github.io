import {useState} from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--main-containers-color);
  border-radius: 15px;
  }
`

const Projects = () => {
  const [isActive, setActive] = useState(false)
  const handleClick = () => {
    if(isActive) setActive(false)
    else setActive(true)

  }
  return <Container
    onClick={handleClick}
  >
    <p>yoyo</p>
  </Container>
}

export default Projects
