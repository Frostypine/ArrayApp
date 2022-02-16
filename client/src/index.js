import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import {Provider} from 'react-redux';
//import {store} from './state/store/store.js'; 
// <Provider store ={store}></Provider>

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


