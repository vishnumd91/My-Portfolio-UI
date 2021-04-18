import React from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Education from './components/education/Education';
function App() {
    return (
        <div>
          <Switch>
            <Route exact path = '/'>
              <Navigation />
              <About></About>
            </Route>

            <Route path = '/about'>
              <About />
            </Route>
            <Route path = '/education'>
              <Education />
            </Route>
          </Switch>
        </div>
    )
}

export default App
