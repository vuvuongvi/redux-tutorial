import React from 'react';
import './App.css';
import List from './components/List';
const ReactDOM = require('react-dom')
function App() {
    ReactDOM.render(
        <List/>,
        document.getElementById('root')
    )
}

export default App;
