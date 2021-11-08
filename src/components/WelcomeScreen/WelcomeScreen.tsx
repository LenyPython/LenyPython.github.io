import BackgroundCanvas from './BackgroundCanvas'
import styled from 'styled-components'
import FallingGraphics from './FallingGraphics'
import avatar from '../../imgs/author.jpg'
import ThemeChanger from './ThemeChanger'
import NavButtons from './NavButtons'
import { ReactComponent as CloseBtn } from '../../imgs/close.svg'
import { useRef, useState } from 'react'


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
  cursor:pointer;
  background: var(--main-containers-color);
  --duration-delay: 2.5s;
  animation: scale-out var(--duration-delay) linear,
             rotate-3d 8s infinite linear var(--duration-delay);
  @keyframes scale-out {
   100% {
    transform: perspective(var(--pers, 1100px)) 
              scale(30%)
              rotateY(-540deg)
              rotateX(1140deg);
       }
   }

  @keyframes rotate-3d {
    0%{
    transform: perspective(var(--pers, 1100px)) 
              scale(30%)
              rotateY(-180deg)
              rotateX(60deg);
       }
    100%{
      transform: perspective(var(--pers, 1100px)) 
              scale(30%)
              rotateY(180deg)
              rotateX(60deg);
    }
  }
  * {
    transform: translateZ(30px);
  }
  &, & > *{
  transform-style: preserve-3d;
  }
  &:hover {
    box-shadow: 0 0 5px var(--main-containers-color),
        0 0 10px var(--main-containers-color),
        0 0 15px var(--main-containers-color),
        0 0 60px -10px var(--main-font-color);
  }
  &.active {
    animation: reset var(--duration-delay) linear;
    cursor:unset;
    @keyframes reset {
      0% {
        transform: scale(30%)
                rotateY(-180deg)
                rotateX(60deg);
      }
      100% {
    transform: scale(100%)
            rotateY(360deg)
            rotateX(720deg);
      }
    }
  }
  div{
    h1 ,h4 {
      padding .3em;
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
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleOpen = () => !isActive&&setIsActive(true)
  const handleClose = () => setIsActive(false)

  return <>
    <BackgroundCanvas matrixRef={matrixRef} />
    <ThemeChanger matrixRef={matrixRef} />
    <Container
      className={isActive?'active':''}
      onClick={handleOpen}
    >
    <div>
      <h1>SelfTaught</h1>
      <h4>About</h4>
    <NavButtons />
    </div>
      <img src={avatar}
        className='avatar'
      alt="author" />
      <CloseBtn 
        onClick={handleClose}
        style={{
        position: 'absolute',
        top: '25px',
        right: '25px',
        width: '24px',
        height: '24px',
        color:'var(--main-font-color)',
        cursor: 'pointer',
        zIndex: 10
        }}
      />
    </Container>
  </>
}

export default WelcomeScreen
