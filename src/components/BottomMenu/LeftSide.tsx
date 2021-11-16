import styled from 'styled-components'

const Container= styled.div`
  position: fixed;
  bottom: 0;
  left: 1%;
  min-width: 300px;
  width: 70%;
  max-width: 20%;
  height: 275px;
  background: var(--main-container-color);
  border: 2 solid var(--main-font-color);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 5px var(--main-font-color),
              0 0 15px var(--main-font-color);

`

const LeftSide = () => {
  return <Container>

  </Container> 
}

export default LeftSide
