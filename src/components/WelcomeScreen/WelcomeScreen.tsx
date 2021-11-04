import BackgroundCanvas from './BackgroundCanvas'
import styled from 'styled-components'
import FallingGraphics from './FallingGraphics'
import avatar from '../../imgs/author.jpg'
import { useRef } from 'react'
import {useDispatch} from 'react-redux'
import {setMainFontColor} from '../../slices/GlobalStyleSlice'


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3em;
  width: 80%;
  max-width: 900px;
  height: 50%;
  max-height: 500px;
  margin: auto;
  div{
    padding: 2em;
    border-radius: 10px;
    background: var(--main-containers-color);
    opacity: .95;
    h1{
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
  const dispatch = useDispatch()


  const handleClick = () => {
    const color = Math.floor(Math.random()* 360)
    matrixRef.current.setColor(color)
    dispatch(setMainFontColor(color))

  }

  return <>
    <BackgroundCanvas matrixRef={matrixRef} />
    <Container>
    <div>
      <h1>SelfTaught</h1>
      <h4>About</h4>
      <button onClick={handleClick}> Check It Out</button>
    </div>
      <img src={avatar}
      alt="author" />
    </Container>
  </>
}

export default WelcomeScreen
