import React from 'react';
import { Switch, Route } from 'react-router-dom';

const SwitchWithRoutes = ({ routes }) => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);

export default SwitchWithRoutes;
