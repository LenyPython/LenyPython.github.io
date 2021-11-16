import styled from 'styled-components'

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3%;
  background: var(--main-font-color);
  box-shadow: 0 0 5px var(--main-font-color);
  &::after {
    position: absolute;
    content: '';
    top: 2px;
    left 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 100px;
    border-radius: 100%;
    background: var(--main-background-color);
    box-shadow: 0 0 5px var(--main-background-color);
  }
`

const TopBar = () => {
  return(
    <Bar />
  )
}

export default TopBar
