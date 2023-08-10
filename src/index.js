import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LandingPage from './LandingPage';
import './styles.css';

if (!document.getElementById('root')) {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
}

ReactDOM.render(<LandingPage />, document.getElementById('root'));


reportWebVitals();
