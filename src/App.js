import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/erorrBoundary'
import { LanguageContext, UserContext } from './contexts'

function App(props) {
  const [user, setUser] = React.useState(props.user ? {
    username: props.user,
    id: props.user,
    loggedIn: true
  } : null)

  const [cars, setCars] = React.useState(props.cars || null)
  const [language, setLanguage] = React.useState('bulgarian')

  const updateCars = (cars) => {
    setCars(cars)
  }
  
  const changeLang = lang => {
    setLanguage(lang)
  }

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true,
    })
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser({
      loggedIn: false
    })
  }

  return (
      <ErrorBoundary>
        <UserContext.Provider value={{
      user,
      logIn,
      logOut,
      cars,
      updateCars
    }}>
          <LanguageContext.Provider value={{language: language, changeLang: changeLang}}>
        {props.children}
        </LanguageContext.Provider>
        </UserContext.Provider>
      </ErrorBoundary>
  );
}

export default App;
