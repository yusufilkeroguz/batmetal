import React from "react";
import { Route } from "react-router-dom";

const RouteWithParams = ({ path, exact, strict, component:Component, location, ...rest }) => (
    <Route
        path={path}
        exact={exact}
        strict={strict}
        location={location}
        render={(props) => <Component {...props} {...rest} />}
    />
);

export default RouteWithParams;