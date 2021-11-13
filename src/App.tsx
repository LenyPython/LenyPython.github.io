import GlobalStyle from './styled/GlobalStyle'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import Portfolio from './components/Portfolio'
import {useAppSelector} from './app/hooks';
import {getGlobalStyle} from './slices/GlobalStyleSlice';
import { PORTFOLIO } from './constatns'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  const styleState = useAppSelector(getGlobalStyle)
  return <BrowserRouter>
    <GlobalStyle {...styleState} />
    <Routes>
      <Route index element={<WelcomeScreen />} />
      <Route path={PORTFOLIO} element={<Portfolio />} />

      <Route path={'/*'} element={<h1>404 error</h1>} />
    
      </Routes>
    </BrowserRouter>
}

export default App;
