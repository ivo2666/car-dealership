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
    Delivery,
    Contacts,
    Admin,
    Login,
    AddCar

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
            <Route path="/addCar" component={AddCar}/>
            <Route path="/admin">
                <Admin />    
            </Route>
            <Route path="/login">
                <Login />    
            </Route>
        </Switch>
        </BrowserRouter>
    )
}