import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import {store} from './store';
function App() {
  return (
    <HelloWorld key={1} tech={store.getState().tech}/>
  );
}

export default App;
