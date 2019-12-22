import React from 'react';
import './App.css';
import Header from './layout/header';
import Main from './layout/main';
import Menu from './layout/menu';
// import Footer from './layout/footer';

function App({data}) {
// const {link} = <a href="http://google.com"></a>

  data = [
    { 
      id: 0,
      cardTitle: `IT SKILLS`,
      cardText: `JavaScript, React, CSS, HTML, Audacity, Microsoft Office`
    },
    {
      id: 1,
      cardTitle: `PROJECTS`,
      cardText: /*${link}GitHub*/ `You can find my projects on my GitHub linked below`
    },
    {
      id: 2,
      cardTitle: `OTHER SKILLS`,
      cardText: `English, Italian, blablablabla`
    },
    {
      id: 3,
      cardTitle: `HOBBIES`,
      cardText: `sve i svašta (dodati)`
    }
  ]

  return (  
    <div className="App">
      <Header></Header>
      <Main data={data}></Main>
      {/* <Footer></Footer> */}
      <Menu></Menu>
    </div>
  );
}

export default App;
