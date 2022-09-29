import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

// https://animate.style/
import 'animate.css';

// css
import './static/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);