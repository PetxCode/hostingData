import React from "react";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import MovieFile from "./components/MovieFile";
import MovieDetail from "./components/MovieDetail";
import APIData from "./components/APIData";
import { Hackerthon } from "./Hackerthon/Hackerthon";
const App = () => {
  return (
    <BrowserRouter>
      {/* <HeaderNav /> */}
      <Switch>
        <Route path="/" exact component={Hackerthon} />
        <Route path="/api" exact component={APIData} />
        <Route path="/detail/:id" exact component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
