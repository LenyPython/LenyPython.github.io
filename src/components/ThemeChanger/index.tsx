import styled from 'styled-components'
import FallingGraphics from '../WelcomeScreen/FallingGraphics'
import Controls from './Controls'
import { MutableRefObject, useState } from 'react'
import {useDispatch} from 'react-redux'
import {setHue} from '../../slices/GlobalStyleSlice'

const ThemeChanger = styled.div`
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
  transition: all .7s;
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
  }
  &.open {
    min-width: 250px;
    min-height 350px;
    background: var(--main-containers-color);
    border-radius: 10px;
    z-index: 9999;
  }
`

const ChangeTheme = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => !isOpen&&setIsOpen(true)

  return <ThemeChanger
    className={isOpen?'open':''}
    onClick={handleClick}
    >
    {isOpen&&<Controls setIsOpen={setIsOpen}/>}
    </ThemeChanger>
}

export default ChangeTheme
