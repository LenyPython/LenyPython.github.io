import styled from 'styled-components'
import RightSide from './RightSide'
import LeftSide from './LeftSide'


const Container= styled.div`
  position: fixed;
  top: 6%;
  left: 50%;
  width: 1000px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 100;
`

const NavBar = () => {
  return<Container>
    <LeftSide />
    <RightSide />
  </Container>
  
}

export default NavBar
