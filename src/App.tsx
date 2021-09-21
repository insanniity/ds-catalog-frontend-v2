import React from 'react';
import './App.scss';
import MyNavBar from "components/MyNavBar";
import Home from "pages/home";
import Catalogo from "pages/catalogo";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <MyNavBar />
        <Switch>
            <Route path="/" exact={true}>
                <Home />
            </Route>
            <Route path="/catalogo">
                <Catalogo />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
