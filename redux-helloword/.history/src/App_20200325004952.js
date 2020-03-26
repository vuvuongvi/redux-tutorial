import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import {store} from './store';
function App() {
  return (
    <HelloWorld key={1} tech={store.getState().tech}/>
  );
}

export default App;
