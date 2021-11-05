import BackgroundCanvas from './BackgroundCanvas'
import styled from 'styled-components'
import FallingGraphics from './FallingGraphics'
import avatar from '../../imgs/author.jpg'
import ThemeChanger from './ThemeChanger'
import NavButtons from './NavButtons'
import { useRef } from 'react'


const Container = styled.div`
  --transZ: 50px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3em;
  width: 80%;
  max-width: 1000px;
  height: 70%;
  max-height: 700px;
  margin: auto;
  padding: 5em;
  border-radius: 10px;
  background: var(--main-containers-color);
  &, & > *{
  transition: all ease .6s;
  transform-style: preserve-3d;
  }
  &:hover {
    transform: perspective(var(--pers, 1100px)) 
    rotateX(var(--rotX, 15deg))
    rotateY(var(--rotY, 15deg))
    translateY(var(--transY, -40px))
    translateZ(var(--transZ, 50px));
    * {
      transform: translateZ(calc(var(--transZ) + 20px));
    }
  }
  &:hover {
    box-shadow: 0 0 5px var(--main-containers-color),
        0 0 10px var(--main-containers-color),
        0 0 15px var(--main-containers-color),
        0 0 60px -10px var(--main-font-color);
  }
  div{
    h1{
      font-family: var(--secondary-font-family);
      font-size: 3rem;
      margin: 1em 0;
    }
    h4{
      margin-bottom: 9em;
    }
  }
  img {
    width: 100%;
    clip-path: polygon(43% 4%, 88% 0, 99% 63%, 66% 84%, 18% 78%, 0 39%);
  }
`

const WelcomeScreen = () => {
  const matrixRef = useRef<FallingGraphics>(new FallingGraphics())

  return <>
    <BackgroundCanvas matrixRef={matrixRef} />
    <ThemeChanger matrixRef={matrixRef} />
    <Container>
    <div>
      <h1>SelfTaught</h1>
      <h4>About</h4>
    <NavButtons />
    </div>
      <img src={avatar}
        className='avatar'
      alt="author" />
    </Container>
  </>
}

export default WelcomeScreen
