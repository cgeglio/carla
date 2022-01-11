import About from './components/About';
import './App.css';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <NavBar />
        <About />
        <Skills />
    </div>
  );
}

export default App;