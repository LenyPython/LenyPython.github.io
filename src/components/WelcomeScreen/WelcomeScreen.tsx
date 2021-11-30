import BackgroundCanvas from './BackgroundCanvas'
import styled from 'styled-components'
import avatar from '../../imgs/author.jpg'
import NavButtons from './NavButtons'
import { ReactComponent as CloseBtn } from '../../svg/close.svg'
import {getHomeCardClass, setHomeCardClass} from '../../slices/ComponentSlice'
import {useDispatch} from 'react-redux'
import {useAppSelector} from '../../app/hooks'


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
  --duration-delay: 1.5s;
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
  &.page-animation {
    animation: page-transition 2s cubic-bezier(.55,.06,.68,.19)  forwards;
    * {
      transform: unset;
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
    <BackgroundCanvas />
    <Container
      className={cardClass}
      onClick={handleOpen}
    >
    <div>
      <h1>SelfTaught SWD</h1>
      <h4>Frontend developer interested in developing his skills, especiallly
        in data visualization and analysis. <br />
        Interested going fullstack.<br />
        Secondary 2D, 3D animation. 
      </h4>
    <NavButtons />
    </div>
      <img src={avatar}
        className='avatar'
      alt="author" />
      <CloseBtn 
        onClick={handleClose}
        style={sx}
      />
    </Container>
  </>
}

export default WelcomeScreen
