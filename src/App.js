import React from 'react';
import Router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserComp from './userContextComp'
import ErrorBoundary from './components/erorrBoundary'

function App() {
  return (
      <ErrorBoundary>
        <UserComp>
        <Router />
        </UserComp>
      </ErrorBoundary>
  );
}

export default App;
