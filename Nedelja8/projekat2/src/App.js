import React from 'react';
import './App.css';
import Header from './layout/header';
import Main from './layout/main'

function App() {
  return (
    <div className="App">
        <Header/>
        
        {/* <div>
          <input type="text" placeholder="Name and Surname"/>
          <input type="text" placeholder="Phone Number"/>
          <input type="submit" value="Add Phone Number"/>
        </div>
        
        <div>
          <div>
            <label>'Mika Perić'</label>
            <label>+381641282230</label>
          </div>
        </div> */}
        <Main/>
    
    </div>
  );
}

export default App;
