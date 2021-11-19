import styled from 'styled-components'
import ThemeChanger from '../ThemeChanger'
import TopBar from '../TopBar'
import ThreeBackground from './ThreeBackground'
import NavBar from '../NavBar'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const Portfolio = () => {

  return <>
    <TopBar />
    <ThemeChanger />
    <CanvasContainer>
    <ThreeBackground />
    </CanvasContainer>
    <NavBar />
  </>
}

export default Portfolio
