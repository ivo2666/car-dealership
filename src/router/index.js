import React, { useContext } from 'react';
import { UserContext } from '../contexts';
import { Home, Extras, Images, Admin, Login, AddCar, Cars, Details, Static } from '../pages';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const { ForUs, Services, Lizing, Insurance, Barter, Consultation, Delivery, Contacts, NotFound } = Static;

export default function Router() {
    const context = useContext(UserContext);
    const loggedIn = context.user && context.user.loggedIn;
    
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/cars" >
                <Cars />
            </Route>
            
            <Route path="/details/:id" exact component={Details}/>
            <Route path="/forUs"  component={ForUs}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/services/lizing"  component={Lizing}/>
            <Route path="/services/insurance"  component={Insurance}/>
            <Route path="/services/barter"  component={Barter}/>
            <Route path="/services/consultation"  component={Consultation}/>
            <Route path="/services/delivery"  component={Delivery}/>
            <Route path="/contacts"  component={Contacts}/>

            <Route path="/admin" >
                {loggedIn ? (<Admin />) : (<Login /> )}
            </Route>
            <Route exact path="/addCar">
            {loggedIn ? (<AddCar />) : (<Login />)}
            </Route>
            <Route path="/login" >
            {loggedIn ? (<Redirect to='/admin' /> ) : (<Login />)}
            </Route>
            <Route path="/addCar/extras/:id" >
            {loggedIn ? (<Extras />) : (<Login />)}
            </Route>
            <Route path="/addCar/images/:id" >
            {loggedIn ? (<Images />) : (<Login />)}
            </Route>
            <Route path="/addCar/:id" >
            {loggedIn ? (<AddCar />) : (<Login />)}
            </Route>

            <Route path="*" component={NotFound}/>
        </Switch>
        
    )
    }