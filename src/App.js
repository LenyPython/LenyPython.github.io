import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div role='main' className="App flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
