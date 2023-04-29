import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import Navbar from './components/Navbar';
import Memo from './components/Memo';
import Whys from './components/Whys';
import Free from './components/Free';
import reportWebVitals from './reportWebVitals';
import Accordian from './components/Accordian';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar/>
  <Memo/>
  <Whys/>
  <Free/>
  <Accordian/>

  </React.StrictMode>
);

reportWebVitals();
