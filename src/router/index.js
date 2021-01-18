import React, { useContext } from 'react';
import UserContext from '.././context';

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
    Delivery,
    Contacts,
    Admin,
    Login,
    AddCar,
    Extras,
    Images
} from '../pages';
import {
    BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function Router() {
    const context = useContext(UserContext);
    const loggedIn = context.user && context.user.loggedIn;
    
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cars" component={Cars}/>
            <Route path="/details" component={Details}/>
            <Route path="/forUs" component={ForUs}/>
            <Route path="/servises" exact component={Servises}/>
            <Route path="/servises/lizing" component={Lizing}/>
            <Route path="/servises/insurance"component={Insurance}/>
            <Route path="/servises/barter" component={Barter}/>
            <Route path="/servises/consultation" component={Consultation}/>
            <Route path="/servises/delivery" component={Delivery}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/admin">
                {loggedIn ? (<Admin />) : (<Login /> )}
            </Route>
            <Route exact path="/addCar">
            {loggedIn ? (<AddCar />) : (<Login />)}
            </Route>
            <Route path="/login">
            {loggedIn ? (<Redirect to='/admin' /> ) : (<Login />)}
            </Route>
            <Route path="/addCar/extras/:id">
            {loggedIn ? (<Extras />) : (<Login />)}
            </Route>
            <Route path="/addCar/images/:id">
            {loggedIn ? (<Images />) : (<Login />)}
            </Route>
        </Switch>
        </BrowserRouter>
    )
    }