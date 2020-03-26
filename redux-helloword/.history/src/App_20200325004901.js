import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import {createStore} from 'redux';
import {store} from './store';
function App() {
  return (
    <HelloWorld tech={store.getState().tech}/>
  );
}

export default App;
