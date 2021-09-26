import React from 'react';
import './App.scss';
import MyNavBar from "components/MyNavBar";
import Home from "pages/home";
import Catalogo from "pages/catalogo";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ProductDetails from "pages/productDetails";
import Admin from "pages/admin";

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
            <Route path="/produto/:id">
                <ProductDetails />
            </Route>
            <Redirect from="/admin" to="/admin/produtos"  exact/>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
