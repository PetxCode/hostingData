import React from "react";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
