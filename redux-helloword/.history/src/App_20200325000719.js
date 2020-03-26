import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import {createStore} from 'redux';
import reducer from './reducers';
const initialState = {tech: "React"}
const store = createStore();
function App() {
  state = {
    tech: "react"
  }
  return (
    <HelloWorld tech={this.state.tech}/>
  );
}

export default App;
