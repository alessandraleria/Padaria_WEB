import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./style/global";

import Login from "./pages/Login/Login.jsx";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Estoque from "./pages/Estoque/Estoque";
import Funcionarios from "./pages/Funcionarios/Funcionarios";
import AddEstoque from "./pages/AddEstoque/AddEstoque";
import AddFuncionario from "./pages/AddFuncionario/AddFuncionario";
import EditEstoque from "./pages/EditEstoque/EditEstoque";
import EditFuncionario from "./pages/EditFuncionario/EditFuncionario";
import LançamentoEstoque from "./pages/LançamentoEstoque/LançamentoEstoque";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/estoque" component={Estoque} />
          <PrivateRoute path="/funcionarios" component={Funcionarios} />
          <PrivateRoute path="/editEstoque" component={EditEstoque} />
          <PrivateRoute path="/addEstoque" component={AddEstoque} />
          <PrivateRoute path="/editFuncionario" component={EditFuncionario} />
          <PrivateRoute path="/addFuncionario" component={AddFuncionario} />
          <PrivateRoute path="/lancamento" component={LançamentoEstoque} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
