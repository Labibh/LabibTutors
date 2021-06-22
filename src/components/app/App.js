import logo from './logo.svg';
import './App.css';

import Navbar from "../nav/Navbar"
import Landing from "../landing/Landing";
import About from "../about/About";
import Subjects from "../subjects/Subjects";
import Services from "../services/Services";
import Contact from "../contact/Contact";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Landing/>
            <About/>
            <Subjects/>
            <Services/>
            <Contact/>
        </div>
    );
}

export default App;
