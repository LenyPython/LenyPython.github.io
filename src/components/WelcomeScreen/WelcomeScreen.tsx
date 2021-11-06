import BackgroundCanvas from './BackgroundCanvas'
import styled from 'styled-components'
import FallingGraphics from './FallingGraphics'
import avatar from '../../imgs/author.jpg'
import ThemeChanger from './ThemeChanger'
import NavButtons from './NavButtons'
import { useRef } from 'react'


const Container = styled.div`
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
  animation: rotate-3d 15s infinite linear;
  @keyframes rotate-3d {
    0%{
    transform: perspective(var(--pers, 1100px)) 
              rotateY(-80deg)
              rotateX(60deg);
       }
    100%{
      transform: perspective(var(--pers, 1100px)) 
              rotateY(280deg)
              rotateX(60deg);
    }
  }
  * {
    transform: translateZ(30px);
  }
  &, & > *{
  transition: all ease 1s;
  transform-style: preserve-3d;
  }
  &:hover {
    animation: reset 1s linear;
    box-shadow: 0 0 5px var(--main-containers-color),
        0 0 10px var(--main-containers-color),
        0 0 15px var(--main-containers-color),
        0 0 60px -10px var(--main-font-color);
    transform:rotateX(var(--rotX, 0deg))
              rotateY(var(--rotY, 0deg))
    translateZ(var(--transZ, 0px));
    * {
      transform: unset;
    }
    @keyframes reset {
      100% {
    transform:rotateX(var(--rotX, 0deg))
              rotateY(var(--rotY, 0deg))
    translateZ(var(--transZ, 0px));

      }
    }
  }
  div{
    h1 ,h4 {
      padding .3em;
      background: var(--main-background-color);
    }
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
