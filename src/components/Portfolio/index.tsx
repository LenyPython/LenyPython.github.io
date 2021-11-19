import styled from 'styled-components'
import ThemeChanger from '../ThemeChanger'
import TopBar from '../TopBar'
import ThreeBackground from './ThreeBackground'
import NavBar from '../NavBar'
import MainPageContent from '../MainPageContent'


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
    <MainPageContent />
  </>
}

export default Portfolio
