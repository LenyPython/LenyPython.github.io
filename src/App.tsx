import GlobalStyle from './styled/GlobalStyle'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import {useAppSelector} from './app/hooks';
import {getGlobalStyle} from './slices/GlobalStyleSlice';
import { BrowserRouter } from 'react-router-dom'



function App() {
  const styleState = useAppSelector(getGlobalStyle)
  return <BrowserRouter>
    <GlobalStyle {...styleState} />
    <WelcomeScreen />
    </BrowserRouter>
}

export default App;
