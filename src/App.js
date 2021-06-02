import React from 'react'
import './App.css';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Infor from './components/Infor';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Slider from './components/Slider';


function App() {


  return (

    <div>
      <Navbar />
      <Slider />
      <Infor />
      <Introduction />
      <Carousel />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
