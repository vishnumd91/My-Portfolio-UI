import React from 'react';
import './index.css';

import { Route, Switch } from 'react-router-dom';
import Admin from './components/admin/Admin';


import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <div>
          <Switch>
          <Route exact path = '/' component = {Navigation} />
          <Route path = '/admin' component = {Admin} />
          </Switch>
        </div>
    )
}

export default App
