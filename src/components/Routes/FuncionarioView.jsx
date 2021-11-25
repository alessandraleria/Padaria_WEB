import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...restOfProps }) {
  const accessLevel = localStorage.getItem("accessLevel");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        accessLevel === 2 ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
