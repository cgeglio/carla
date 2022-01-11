import About from "./components/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="section-container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;