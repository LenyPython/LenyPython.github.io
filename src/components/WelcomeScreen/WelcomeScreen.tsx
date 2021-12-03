import BackgroundCanvas from './BackgroundCanvas'
import styled from 'styled-components'
import NavButtons from './NavButtons'
import Avatar from './Avatar'
import ThemeChanger from '../ThemeChanger'
import { ReactComponent as CloseBtn } from '../../svg/close.svg'
import {getHomeCardClass, setHomeCardClass} from '../../slices/ComponentSlice'
import {useDispatch} from 'react-redux'
import {useAppSelector} from '../../app/hooks'


const Container = styled.div`
  position: relative;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 30%;
  width: 80vw;
  max-width: 1000px;
  max-height: 700px;
  margin: auto;
  padding: 5em;
  border-radius: 10px;
  cursor:pointer;
  background: var(--main-containers-color);
  --duration-delay: 1.5s;
  animation: scale-out var(--duration-delay) linear,
             rotate-3d 8s infinite linear var(--duration-delay);
  @keyframes scale-out {
    0% {
    transform: perspective(var(--pers, 1100px)) 
              scale(100%)
              rotateY(0deg)
              rotateX(0deg);
    }
   100% {
    transform: perspective(var(--pers, 1100px)) 
              scale(40%)
              rotateY(-540deg)
              rotateX(780deg);
       }
   }

  @keyframes rotate-3d {
    0%{
    transform: perspective(var(--pers, 1100px)) 
              scale(40%)
              rotateY(-180deg)
              rotateX(60deg);
       }
    100%{
      transform: perspective(var(--pers, 1100px)) 
              scale(40%)
              rotateY(180deg)
              rotateX(60deg);
    }
  }
  &:hover {
    box-shadow: 0 0 5px var(--main-containers-color),
        0 0 10px var(--main-containers-color),
        0 0 15px var(--main-containers-color),
        0 0 60px -10px var(--main-font-color);
  }
  &, * {
    transform-style: preserve-3d;
    transform: translateZ(30px);
  }
  &.active {
    animation: reset var(--duration-delay) linear;
    cursor:unset;
    transform-style: flat;
    *{ transform-style: flat; }
    @keyframes reset {
      0% {
        transform: scale(40%)
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
  &.page-animation {
    animation: page-transition 2s cubic-bezier(.55,.06,.68,.19)  forwards;
    * {
      transform: translateZ(0);
    }
    @keyframes page-transition {
      10% {
    transform: perspective(var(--pers, 1100px)) 
              rotateY(-80deg)
              scale(100%);
      }
      100% {
    transform: perspective(var(--pers, 1100px))
              rotateY(-80deg)
              scale(0%);
      }
    }
  }
  div{
    h1{
      font-family: var(--secondary-font-family);
      font-size: 3rem;
      margin-bottom: 1em;
    }
    h4{
      margin-bottom: 9em;
    }
  }
  @media(max-width:751px){
    margin-top: 100px;
    margin-bottom: 3em;
    display:flex;
    flex-direction: column-reverse;
    justify-content: center;
    max-height: unset;
    padding: 75px 1em 2em;
    div {
      h1 { font-size: 2rem; }
      h4 { 
        font-size: .8rem;
        margin-bottom: 2em;
      }
    }
  }
`

const WelcomeScreen = () => {
  const dispatch = useDispatch()
  const cardClass = useAppSelector(getHomeCardClass)
  const handleOpen = () => !cardClass&&dispatch(setHomeCardClass('active'))
  const handleClose = () => dispatch(setHomeCardClass(''))
  const sx = {
        position: 'absolute' as 'absolute',
        top: '25px',
        right: '25px',
        width: '24px',
        height: '24px',
        color:'var(--main-font-color)',
        cursor: 'pointer',
        zIndex: 10
        }

  return <>
    <ThemeChanger />
    <BackgroundCanvas />
    <Container
      className={cardClass}
      onClick={handleOpen}
    >
    <div>
      <h1>Frontend dev</h1>
      <h4>Interested in developing his skills, especiallly
        in data analysis and visualization, <br />
        Planing going fullstack.<br />
      </h4>
      <NavButtons />
    </div>
    <Avatar />
    <CloseBtn 
      onClick={handleClose}
      style={sx}
    />
    </Container>
  </>
}

export default WelcomeScreen
