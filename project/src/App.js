import React, { useState } from 'react';
import Profile from './components/Profile';
import Add from './components/Add';
import List from './components/List';
import Remove from './components/Remove';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(new Date())
    
  return (
    
      <div className="center">
          <div className="listContent">
          <List timer={timer}/>
          <Add update={setTimer}/>
          <Profile timer={timer}/>
          <Remove update={setTimer}/>
        </div>
      </div>

    );
  
  }

export default App;