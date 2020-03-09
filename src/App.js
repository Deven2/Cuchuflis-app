import React from 'react';
import BottomNav from './components/BottomNav.jsx';
import Main from './components/Main.jsx';
import TopNav from './components/TopNav.jsx';
import './css/App.css';

function App () {
  
  return (
    <div id="container">
      <TopNav />
      <Main />
      <BottomNav />   
    </div>
    
  )
}

export default App;
