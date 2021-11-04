import GlobalStyle from './styled/GlobalStyle'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import {useAppSelector} from './app/hooks';
import {getGlobalStyle} from './slices/GlobalStyleSlice';



function App() {
  const styleState = useAppSelector(getGlobalStyle)
  return <>
    <GlobalStyle {...styleState} />
    <WelcomeScreen />
    </>
}

export default App;
