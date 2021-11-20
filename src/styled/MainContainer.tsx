import styled from 'styled-components'



const MainContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1%;
  height: 84%;
  width: 80%;
  max-width: 1200px;
  padding: 1em;
  background: var(--main-containers-color);
  border-radius: 15px;
  transition: all .4s;
  transform: translateX(-50%);
  box-shadow: var(--main-shadow);
  &.invisible {
    transform: translate(-50%, -125%);
  }
`

export default MainContainer
