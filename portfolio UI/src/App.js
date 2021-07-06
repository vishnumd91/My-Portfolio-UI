import React from "react";
import { Route, Switch} from "react-router-dom";
import "./index.css";

import Navigation from "./components/navigation/Navigation";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Navigation} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
