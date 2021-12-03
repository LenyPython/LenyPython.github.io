import styled from 'styled-components'
import RightSide from './RightSide'
import LeftSide from './LeftSide'


const Container= styled.div`
  position: fixed;
  top: 50px;
  left: 50%;
  width: 90%;
  max-width: 1100px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 100;
  @media(max-width: 600px){
    top: unset;
    bottom: 5%;
    flex-direction: column;
    align-items: center;
    z-index: 0;
  }
`

const NavBar = () => {
  return<Container>
    <LeftSide />
    <RightSide />
  </Container>
  
}

export default NavBar
