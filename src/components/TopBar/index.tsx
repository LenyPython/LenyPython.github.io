import styled from 'styled-components'

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3%;
  background: var(--main-containers-color);
  z-index: 1;
  box-shadow: 0 0 5px var(--main-font-color),
              0 0 15px var(--main-font-color),
              0 0 20px var(--main-font-color);
  &::after {
    position: absolute;
    content: '';
    top: 2px;
    left 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 100px;
    border-radius: 100%;
    border-top: 7px solid var(--main-font-color);
    background: var(--main-containers-color);
    box-shadow: inset 0 0 5px var(--main-font-color);
  }
`

const TopBar = () => {
  return(
    <Bar />
  )
}

export default TopBar
