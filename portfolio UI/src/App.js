import React from "react";
import { Route, Switch} from "react-router-dom";
import "./index.css";

import Navigation from "./components/navigation/Navigation";
import Admin from "./components/admin/login/AdminLogin";
import Dashboard from "./components/admin/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Navigation} />
        <Route path="/admin" component={Admin} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
