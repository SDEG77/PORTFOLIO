import About from "./main-components/About"
import Education from "./main-components/Education"
import Footer from "./main-components/Footer"
import Home from "./main-components/Home"
import Navbar from "./main-components/Navbar"
import Portfolio from "./main-components/Portfolio"
import Seminar from "./main-components/Seminar"
import Skills from "./main-components/Skills"

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Home />
        <About />      
        <Skills />
        <Portfolio />
        <Education />
        <Seminar />
      </main>
      
      <Footer />
    </>
  );
}

export default App
