import './App.css';


import Nav from "./components/Nav"
import Hero from './components/Hero';
import Intro from './components/Intro';
import Places from './components/Places';
import Restaurants from './components/Restaurants';
import Breweries from './components/Breweries';
import Bars from './components/Bars';
import Plan from './components/Plan';
import Image from './components/Image';
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Intro />
      <Places />
      <Restaurants />
      <Bars />
      <Breweries />
      <Plan />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
