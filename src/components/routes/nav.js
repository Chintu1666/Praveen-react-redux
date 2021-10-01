import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "../screens/mainScreen";
import ProductDetail from "../screens/productDetail";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default Routing;
