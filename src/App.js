import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
