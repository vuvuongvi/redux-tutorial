import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import List from './components/List';
//Khởi tạo dùng redux bằng thư viện react-redux
import {Providers} from 'react-redux';
//require cái store redux vào nè
import store from './examples';
store
ReactDOM.render(
  // require cái store vào trong đây
  <Providers store={store}>
      <React.StrictMode>
    <List/>
  </React.StrictMode>
  </Providers>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
