import React from 'react';
import './App.css';
import Header from './layout/header';
import Main from './layout/main';

function App() {
  let contacts = [
    {
      nameSurname: 'Mile Kitić',
      phoneNumber: '+381645221489'
    },
    {
      nameSurname: 'Mali Đogani',
      phoneNumber: '+381 65 1282230'
    }
  ]
  return (
    <div className="App">
      <Header />
     <Main data={contacts} />
    </div>
  );
}

export default App;
