import React, {useState} from 'react';
import './App.scss';
import MyNavBar from "components/MyNavBar";
import Home from "pages/home";
import Catalogo from "pages/catalogo";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import ProductDetails from "pages/productDetails";
import Admin from "pages/admin";
import Auth from "pages/admin/auth";
import history from "utils/history";
import {AuthContext, AuthContextData} from "utils/AuthContext";

const App = () => {
    const [authContextData, setAuthContextData] = useState<AuthContextData>({
        authenticated: false,
    });

  return (
      <AuthContext.Provider  value={{authContextData, setAuthContextData}}>
        <Router history={history}>
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
                <Redirect from="/admin/auth" to="/admin/auth/login"  exact/>
                <Route path="/admin/auth">
                    <Auth />
                </Route>
                <Redirect from="/admin" to="/admin/produtos"  exact/>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </Router>
      </AuthContext.Provider>
  );
}

export default App;
