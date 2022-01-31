import React, { useEffect } from 'react';
import './index.css';
import Landing from './components/Landing';

const App = () => {
  useEffect(() => {
    document.title = "Eye Of Nature"
  },[])
  return ( 
    <Landing />
  );
}

export default App;
