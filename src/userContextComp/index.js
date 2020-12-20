import React, { useState, useEffect } from 'react'
import UserContext from '../context'
import getCookie from '../helpers/cookie'
import urls from '../config';

export default (props) => {

    const [user, setUser] = useState(null)
  
  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    })
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser({
      loggedIn: false
    })
}

  useEffect(() => {
    const token = getCookie('x-auth-token')
    if(!token) {
      logOut()
      return
    }

    fetch(urls.verify, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(promise => {
      return promise.json()
    }).then(response => {
      if(response.status) {
        logIn({
          username: response.user.username,
          id: response.user._id
        })
      } else {
        logOut()
      }
    })
  }, [])

  
  console.log('user', user)

  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

