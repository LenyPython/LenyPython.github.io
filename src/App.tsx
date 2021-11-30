import GlobalStyle from './styled/GlobalStyle'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import Portfolio from './components/Portfolio'
import {useAppSelector} from './app/hooks';
import {getGlobalStyle} from './slices/GlobalStyleSlice';
import {getWelcome} from './slices/ComponentSlice';


function App() {
  const styleState = useAppSelector(getGlobalStyle)
  const welcome = useAppSelector(getWelcome)
  return <>
    <GlobalStyle {...styleState} />
    {
    welcome?
     <WelcomeScreen />
     :
     <Portfolio />
    }
  </>

}

export default App;
