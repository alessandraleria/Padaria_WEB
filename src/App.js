import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./style/global";

import Login from "./pages/Login/Login.jsx";
import Estoque from "./pages/Estoque/Estoque.jsx";
import PrivateRoute from "./components/Routes/PrivateRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/estoque" component={Estoque} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
