import styled from 'styled-components'
import Controls from './Controls'
import { useState } from 'react'
import ThemeButton from '../../styled/ThemeButton'

const ThemeChanger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 5%;
  left: 50%;
  min-width: 55px;
  min-height:  35px;
  transform: translateX(-50%);
  background: var(--main-font-color);
  color: var(--main-background-color);
  font-size: .6rem;
  font-weight: bold;
  border-radius: 50%;
  z-index: 9999;
  cursor: pointer;
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
    box-shadow: 0 0 5px var(--main-font-color),
      0 0 10px var(--main-font-color),
      0 0 15px var(--main-font-color),
      0 0 20px var(--main-font-color),
      0 0 30px var(--main-font-color),
      0 0 40px var(--main-font-color);
    }
    100% {
    box-shadow: 0 0 20px var(--main-font-color),
      0 0 25px var(--main-font-color),
      0 0 30px var(--main-font-color),
      0 0 45px var(--main-font-color),
      0 0 65px var(--main-font-color);
    }
  }
  &.open {
    top: 3%;
    padding: 3em;
    min-width: 250px;
    min-height 350px;
    background: var(--main-containers-color);
    border-radius: 10px;
  }
`

const ChangeTheme = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => !isOpen&&setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return <ThemeChanger
    className={isOpen?'open':''}
    onClick={handleOpen}
    >
    {isOpen&&<><Controls />
    <ThemeButton 
    onClick={handleClose}
      style={{
        color: 'var(--main-font-color)',
        margin: '0 auto'
      }}
    >
    close
    </ThemeButton>
    </>}
    </ThemeChanger>
}

export default ChangeTheme
