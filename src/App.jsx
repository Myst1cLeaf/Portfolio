import './App.css';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"

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
      <Analytics />
    </div>
  )
}

export default App

