import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router  } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
