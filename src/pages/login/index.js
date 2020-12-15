import React, {useContext ,useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import UserContext from '../../context'; 
import authenticate from '../../helpers/auhtenticate';
import { useHistory } from "react-router-dom"

const Login = styled.main`
form {
    width: 50%;
    margin: 70px auto;
}
`

export default () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(UserContext);
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await authenticate('http://localhost:9999/api/user/login', {
        username,
        password
      }, (user) => {
        context.logIn(user)
        history.push('/admin')
      }, (e) => {
        console.log('Error', e)
      }
    )
  }

    return(
        <Login>
            <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail" value={username}
          onChange={e => setUsername(e.target.value)}>
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword" value={password}
          onChange={e => setPassword(e.target.value)}>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
        </Login>
    )
}