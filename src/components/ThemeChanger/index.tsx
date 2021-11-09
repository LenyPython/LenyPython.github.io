import styled from 'styled-components'
import { Props } from '../WelcomeScreen/BackgroundCanvas'
import {useDispatch} from 'react-redux'
import {setMainColor} from '../../slices/GlobalStyleSlice'

const Button = styled.button`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--main-font-color);
  color: var(--main-background-color);
  font-size: .6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 1em 2em;
  border: none;
  border-radius: 40%;
  --delay: 2s;
  animation: appear var(--delay) ease-in,
            blink 2s alternate ease infinite;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
            }
  @keyframes blink{
    0%{
    box-shadow: 0 0 10px var(--main-font-color),
      0 0 10px var(--main-font-color),
      0 0 20px var(--main-font-color),
      0 0 40px var(--main-font-color);
    }
    100% {
    box-shadow: 0 0 10px var(--main-font-color),
      0 0 20px var(--main-font-color),
      0 0 35px var(--main-font-color),
      0 0 75px var(--main-font-color);
    }
  };
`

const ChangeTheme: React.FC<Props> = ({ matrixRef }) => {
  const dispatch = useDispatch()


  const handleClick = () => {
    const color = Math.floor(Math.random()* 360)
    matrixRef.current.setColor(color)
    dispatch(setMainColor(color))
  }

  return <Button onClick={handleClick} >theme</Button>
}

export default ChangeTheme
