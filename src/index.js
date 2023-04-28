import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import Navbar from './components/Navbar';
import Memo from './components/Memo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar/>
  <Memo/>
  </React.StrictMode>
);

reportWebVitals();
