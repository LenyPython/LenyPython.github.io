import styled from 'styled-components'
import ThemeChanger from '../ThemeChanger'
import TopBar from '../TopBar'
import ThreeBackground from './ThreeBackground'
import NavBar from '../NavBar'
import MainPageContent from '../MainPageContent'
import ContactForm from '../ContactForm'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -10;
`
const Portfolio = () => {

  return <>
    <TopBar />
    <ThemeChanger />
    <NavBar />
    <MainPageContent />
    <ContactForm />
    <CanvasContainer>
    <ThreeBackground />
    </CanvasContainer>
  </>
}

export default Portfolio
