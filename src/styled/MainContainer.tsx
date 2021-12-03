import styled from 'styled-components'



const MainContainer = styled.div`
  position: fixed;
  top: 100px;
  bottom: 16px;
  left: 50%;
  width: 95%;
  max-width: 1200px;
  padding: 1em;
  background: var(--main-containers-color);
  border-radius: 15px;
  transition: all .4s;
  transform: translateX(-50%);
  box-shadow: var(--main-shadow);
  overflow: hidden;
  &.invisible {
    transform: translate(-50%, -125%);
  }
  @media(max-width:600px){
    top: 75px;
    bottom: var(--nav-height);
    h1 {
      font-size: 24px;
      margin-right: 50px;
    }
  }
`

export default MainContainer
