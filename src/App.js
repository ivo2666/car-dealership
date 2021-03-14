import React from 'react';
import Router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserComp from './userContextComp'
import ErrorBoundary from './components/erorrBoundary'
import { LanguageContext } from './contexts'

function App() {
  const [language, setLanguage] = React.useState('bulgarian')
  const changeLang = lang => {
    setLanguage(lang)
  }
  return (
      <ErrorBoundary>
        <UserComp>
          <LanguageContext.Provider value={{language: language, changeLang: changeLang}}>
        <Router />
        </LanguageContext.Provider>
        </UserComp>
      </ErrorBoundary>
  );
}

export default App;
