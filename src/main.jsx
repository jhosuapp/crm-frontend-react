//React
import React from 'react';
import ReactDOM from 'react-dom/client';
//App
import App from './jsx/App.jsx';
//Global styles
import './scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
