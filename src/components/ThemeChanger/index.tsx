import styled from 'styled-components'
import Controls from './Controls'
import { useState } from 'react'

const ThemeChanger = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  min-width: 55px;
  min-height:  35px;
  transform: translateX(-50%);
  background: var(--main-font-color);
  color: var(--main-background-color);
  font-size: .6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: none;
  border-radius: 50%;
  transition: all .3s;
  --delay: 2s;
  animation: appear var(--delay) ease-in,
            blink 1s alternate ease infinite;
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
    top: 3%;
    padding: 3em;
    min-width: 250px;
    min-height 350px;
    background: var(--main-containers-color);
    border-radius: 10px;
    z-index: 9999;
  }
`

const ChangeTheme = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleEnter = () => !isOpen&&setIsOpen(true)
  const handleLeave = () => setIsOpen(false)

  return <ThemeChanger
    className={isOpen?'open':''}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    >
    {isOpen&&<Controls />}
    </ThemeChanger>
}

export default ChangeTheme
