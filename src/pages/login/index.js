import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Login = styled.main`
form {
    width: 50%;
    margin: 70px auto;
}
`

export default () => {
    return(
        <Login>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
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