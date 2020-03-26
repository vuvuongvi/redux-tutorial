import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import {createStore} from 'redux';
import reducer from './reducers';
const initialState = {tech: "React"}
const store = createStore(reducer, initialState);
function App() {
  return (
    <HelloWorld tech={state.tech}/>
  );
}

export default App;
