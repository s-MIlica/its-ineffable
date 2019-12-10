import React, { Component } from 'react';
import './App.css';
import Footer from './layout/footer';
import Content from './layout/component';
import Header from './layout/header';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer></Footer>
    </div>
  )
}

export default App;
