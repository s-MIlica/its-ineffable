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
    cardTitle: `IT SKILLS`,
    cardText:<ul> <li>JavaScript</li> <li>React</li> <li>CSS</li> <li>HTML</li> <li>GitHub</li> <li>Audacity</li> <li>Microsoft Office</li> </ul>
  },

  {
    cardTitle: `PROJECTS`,
    cardText: <a href="https://www.github.com/s-MIlica" target="_blank" rel="noopener noreferrer" title="Link to my GitHub" id="card-link">You can find my projects on my GitHub</a>
  },

  {
    cardTitle: `OTHER SKILLS`,
    cardText: <ul> <li>English</li> <li>Italian</li> <li>blablablabla </li> </ul>
  },

  {
    cardTitle: `HOBBIES`,
    cardText: <ul> <li>sve</li> <li>i", "svašta (dodati)</li> </ul>
  }
]

  return (  
    <div className="App">
      <Header />
      <Main data={data} />
      {/* <Footer></Footer> */}
      <Menu />
    </div>
  );
}

export default App;
