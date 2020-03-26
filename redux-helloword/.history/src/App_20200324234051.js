import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
function App() {
  state = {
    tech: "react"
  }
  return (
    <HelloWorld tech={this.state.tech}/>
  );
}

export default App;
