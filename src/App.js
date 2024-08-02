import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/about'element={<About showNavbar={true} />}/>
        <Route path='/contact'element={<Contact showNavbar={true} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
