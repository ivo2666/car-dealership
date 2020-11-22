import React from 'react';
import {
    Home,
    Cars,
    Details,
    ForUs,
    Servises,
    Insurance,
    Lizing,
    Barter,
    Consultation,
    Delivery

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
            <Route exact path="/servises">
                <Servises />
            </Route>
            <Route path="/servises/lizing">
                <Lizing />
            </Route>
            <Route path="/servises/insurance">
                <Insurance />
            </Route>
            <Route path="/servises/barter">
                <Barter />
            </Route>
            <Route path="/servises/consultation">
                <Consultation />
            </Route>
            <Route path="/servises/delivery">
                <Delivery />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}