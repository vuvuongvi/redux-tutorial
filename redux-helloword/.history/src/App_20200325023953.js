import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import {store} from './store';
import ButtonGroup from './ButtonGroup';
function App() {
  return (
    <HelloWorld key={1} tech={store.getState().tech}/>,
    <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
  );
}

export default App;
