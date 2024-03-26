import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main/Main';
import Foot from './components/Foot';
import Footer  from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Foot />
      <Footer />
    </div>
  )
};

export default App;