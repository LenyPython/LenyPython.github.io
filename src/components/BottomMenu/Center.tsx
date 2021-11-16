import styled from 'styled-components'

const Container= styled.div`
  position: fixed;
  bottom: 0;
  left: 10%;
  min-width: 300px;
  width: 70%;
  max-width: 50%;
  height: 250px;
  background: var(--main-containers-color);
  border: 2 solid var(--main-font-color);
  border-radius: 20px 20px 0 0;
  z-index: 1;
  box-shadow: 0 0 5px var(--main-font-color),
              0 0 15px var(--main-font-color);

`

const Center = () => {
  return <Container>

  </Container> 
}

export default Center
