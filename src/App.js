import React from 'react';
import Router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserComp from './userContextComp'

function App() {
  return (
    <UserComp>
    <Router />
    </UserComp>
  );
}

export default App;
