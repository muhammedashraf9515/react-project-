import React from 'react';
import './App.css';
import Navbar from './Header/Navbar'
import './Header/Header.css'
import Landing from './Header/Landing';
import Maintitle from './Components/Maintitle/Maintitle';
import Articles from './Components/Articles'
import Gallery from './Components/Maintitle/Gallery';
import Features from "./Components/Maintitle/Features";
import Testimonials from "./Components/Maintitle/Testimonials";
import Team from './Components/Maintitle/Team';
import Services from './Components/Maintitle/Services';
import Ourskils from './Components/Maintitle/Ourskils';
import Worksteps from './Components/Maintitle/Worksteps';
import Events from './Components/Maintitle/Events';
import Pricing from './Components/Maintitle/Pricing';
import Videos from './Components/Maintitle/Videos';
import Stats from './Components/Maintitle/Stats';
import Discount from './Components/Maintitle/Discount';
import Footer from './Components/Maintitle/Footer';
function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Landing />
      <Maintitle />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />     
      <Services /> 
      < Ourskils />
      <Worksteps />
      <Events />
      <Pricing />
      <Videos />

      <Stats />
      <Discount />
      
      <Footer />

          </div>
    </>
  );
}

export default App;
