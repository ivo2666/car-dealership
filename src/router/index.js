import React from 'react';
import Home from '../pages/home';
import Cars from '../pages/cars'
import {
    BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/cars">
                <Cars />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}