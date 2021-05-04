import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '@/src/containers/helloWorld';
import { BrowserRouter } from 'react-router-dom';
import '@/src/assets/styles/index.css';
import '@/src/assets/styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <h3>React {new Date().toLocaleDateString()}</h3>
      <HelloWorld />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
