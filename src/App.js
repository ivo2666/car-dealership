import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserComp from './userContextComp'
import ErrorBoundary from './components/erorrBoundary'
import { LanguageContext } from './contexts'

function App(props) {
  const [language, setLanguage] = React.useState('bulgarian')
  const changeLang = lang => {
    setLanguage(lang)
  }
  return (
      <ErrorBoundary>
        <UserComp>
          <LanguageContext.Provider value={{language: language, changeLang: changeLang}}>
        {props.children}
        </LanguageContext.Provider>
        </UserComp>
      </ErrorBoundary>
  );
}

export default App;
