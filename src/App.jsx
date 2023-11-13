import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residenscies from "./components/Residencies/Residenscies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import Getstarted from "./components/getstarted/Getstarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residenscies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
  );
}

export default App;
