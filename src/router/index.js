import React from 'react';
import {
    Home,
    Cars,
    Details,
    ForUs,
    Servises
} from '../pages';
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
            <Route path="/details">
                <Details />
            </Route>
            <Route path="/forUs">
                <ForUs />
            </Route>
            <Route path="/servises">
                <Servises />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}