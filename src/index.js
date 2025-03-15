import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//Index.js works as a bridge that renders App.js and injects it into the web


reportWebVitals();
