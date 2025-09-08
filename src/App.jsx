import './App.css';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

