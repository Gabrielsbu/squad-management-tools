import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

import Routes from './routes';

import './styles/global.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes/>
      <Footer></Footer>
    </div>
  );
}

export default App
