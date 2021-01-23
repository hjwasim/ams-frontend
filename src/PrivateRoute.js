import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, user: isUser, ...rest}) => (
    <Route {...rest} render={(props) =>  <Component {...props} user={isUser} /> }
    />
  );


export default PrivateRoute;
