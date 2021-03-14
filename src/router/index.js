import React, { useContext } from 'react';
import { UserContext } from '../contexts';
import PageLayout from '../components/pageLayout'
import { Home, Extras, Images, Admin, Login, AddCar, Cars, Details, Static } from '../pages';
import {
    BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const { ForUs, Services, Lizing, Insurance, Barter, Consultation, Delivery, Contacts, NotFound } = Static;

export default function Router() {
    const context = useContext(UserContext);
    const loggedIn = context.user && context.user.loggedIn;
    
    return (
        <BrowserRouter>
        <PageLayout>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cars" exact component={Cars}/>
            
            <Route path="/details/:id" exact component={Details}/>
            <Route path="/forUs" exact component={ForUs}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/services/lizing" exact component={Lizing}/>
            <Route path="/services/insurance" exact component={Insurance}/>
            <Route path="/services/barter" exact component={Barter}/>
            <Route path="/services/consultation" exact component={Consultation}/>
            <Route path="/services/delivery" exact component={Delivery}/>
            <Route path="/contacts" exact component={Contacts}/>

            <Route path="/admin" exact>
                {loggedIn ? (<Admin />) : (<Login /> )}
            </Route>
            <Route exact path="/addCar">
            {loggedIn ? (<AddCar />) : (<Login />)}
            </Route>
            <Route path="/login" exact>
            {loggedIn ? (<Redirect to='/admin' /> ) : (<Login />)}
            </Route>
            <Route path="/addCar/extras/:id" exact>
            {loggedIn ? (<Extras />) : (<Login />)}
            </Route>
            <Route path="/addCar/images/:id" exact>
            {loggedIn ? (<Images />) : (<Login />)}
            </Route>
            <Route path="/addCar/:id" exact>
            {loggedIn ? (<AddCar />) : (<Login />)}
            </Route>

            <Route path="*" component={NotFound}/>
        </Switch>
        </PageLayout>
        </BrowserRouter>
    )
    }