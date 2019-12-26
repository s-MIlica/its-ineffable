import React, { useState } from 'react';
import './App.css';
// import LogIn from './components/login'
import { BrowserRouter as Router } from 'react-router-dom';  
import Content from './layout/content';
import Footer from './layout/footer';
import './layout/layout.css'
import Header from './layout/header';

function App() {

  const [user, setUser] = useState()
  // const [topic, setTopics] = useState([])
  console.log(user)
  // console.log(topic)


  return (
    <div className="App">
      <Router>
        <Header logIn={user} setUser={setUser}/>

        <Content setUser={setUser} user={user} logIn={user} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
