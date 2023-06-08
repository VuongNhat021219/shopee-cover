import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import "./App.css"; // Import CSS tại đây
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
