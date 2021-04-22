import React from 'react';
import Arrived from './components/Arrived';
import Browse from './components/Browse';
import Clients from './components/Clients';
import Header from './components/Header';
import Hero from './components/Hero';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Header/>
   <Hero/>
   <Browse/>
   <Arrived/>
   <Clients/>
   <AsideMenu/>
   <Footer/>
   </>
  );
}

export default App;
