import styled from 'styled-components'
import ThemeChanger from '../ThemeChanger'
import ThreeBackground from './ThreeBackground'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const Portfolio = () => {

  return <>
    <ThemeChanger />
    <CanvasContainer>
    <ThreeBackground />
    </CanvasContainer>
  </>
}

export default Portfolio
