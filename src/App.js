import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <main>
          <Hero />
          <Projects />
          <Technologies />
          <Timeline />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
